import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm";
import { UserEntity } from "src/user/user.entity";

@Entity('idea')
export class IdeaEnitity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    idea: string;

    @Column('text')
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => UserEntity, author => author.ideas)
    author: UserEntity;
}
