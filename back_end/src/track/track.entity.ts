import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable } from "typeorm";
import { UserEntity } from '../user/user.entity';

@Entity('track')
export class TrackEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('int')
    trackId: number;

    @ManyToOne(type => UserEntity, { cascade: true })
    @JoinTable()
    upVotes: UserEntity[];

    @ManyToOne(type => UserEntity, { cascade: true })
    @JoinTable()
    downVotes: UserEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}