import { Entity, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { UserEntity } from '../user/user.entity';

@Entity('track')
export class TrackEntity {
    @PrimaryColumn()
    id: number;

    @Column('int')
    trackId: number;

    @ManyToMany(() => UserEntity, { cascade: true })
    @JoinTable()
    upVotes: UserEntity[];

    @ManyToMany(() => UserEntity, { cascade: true })
    @JoinTable()
    downVotes: UserEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}