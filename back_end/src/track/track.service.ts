import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TrackRO } from './track.dto';
import { TrackApi } from './track.api';
import { InjectRepository } from '@nestjs/typeorm';
import { TrackEntity } from './track.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Votes } from '../shared/votes.enum';

@Injectable()
export class TrackService {
    constructor(
        @InjectRepository(TrackEntity)
        private trackRepository: Repository<TrackEntity>
    ) { }

    private async vote(track: TrackEntity, user: UserEntity, vote: Votes) {
        const opposite = vote === Votes.UP ? Votes.DOWN : Votes.UP;

        if (
            track[opposite].filter(voter => voter.id === user.id).length > 0 ||
            track[vote].filter(voter => voter.id === user.id).length > 0
        ) {
            track[opposite] = track[opposite].filter(voter => voter.id !== user.id);
            track[vote] = track[vote].filter(voter => voter.id !== user.id);
            await this.trackRepository.save(track);
        } else if (track[vote].filter(voter => voter.id === user.id).length < 1) {
            track[vote].push(user);
            await this.trackRepository.save(track);
        } else {
            throw new HttpException('Unable to cast track', HttpStatus.BAD_REQUEST);
        }
    }

    readTrack(trackId: number): Promise<TrackRO> {
        return TrackApi.readTrack(trackId);
    }

    findTrack(key: string): Promise<TrackRO[]> {
        return TrackApi.findTrack(key);
    }
}
