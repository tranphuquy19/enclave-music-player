import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, BeforeInsert, OneToMany, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { config} from '../shared/config';
import { UserRO } from './user.dto';
import { IdeaEnitity } from "src/idea/idea.entity";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        type: 'text',
        unique: true
    })
    username: string;

    @Column('text')
    password: string;

    @OneToMany(type => IdeaEnitity, ideas => ideas.author)
    ideas: IdeaEnitity[]

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    toResponseObject(showToken: boolean = true): UserRO {
        const { id, createdAt, username, token, ideas } = this;
        const responseObject: any = { id, createdAt, username, ideas };
        if (showToken) {
            responseObject.token = token;
        }

        return responseObject;
    }

    async comparePassword(attempt: string) {
        return await bcrypt.compare(attempt, this.password);
    }

    private get token() {
        const { id, username } = this;
        const { jwtSecretKey, jwtExpiresIn } = config;
        return jwt.sign(
            { id, username },
            jwtSecretKey,
            { expiresIn: jwtExpiresIn });
    }
}
