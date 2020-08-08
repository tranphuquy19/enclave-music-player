import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { TrackRO } from './track.dto';
import { TrackApi } from './track.api';
import { InjectRepository } from '@nestjs/typeorm';
import { TrackEntity } from './track.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { Votes } from '../shared/votes.enum';
import { config } from '../shared/config';

@Injectable()
export class TrackService {
    constructor(
        @InjectRepository(TrackEntity)
        private trackRepository: Repository<TrackEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    private async find(trackId: number): Promise<TrackEntity> {
        return await this.trackRepository.findOne({ where: { trackId }, relations: ['upVotes', 'downVotes'] });
    }

    private async create(trackId: number): Promise<TrackEntity> {
        return await this.trackRepository.create({ trackId, upVotes: [], downVotes: [] });
    }

    private async findOrCreateNewOne(trackId: number): Promise<TrackEntity> {
        const track = await this.find(trackId);
        if (track) return track;
        else return await this.create(trackId);
    }

    private async vote(track: TrackEntity, user: UserEntity, vote: Votes): Promise<TrackEntity> {
        const opposite = vote === Votes.UP ? Votes.DOWN : Votes.UP;

        if (
            track[opposite].some(voter => voter.id === user.id) ||
            track[vote].some(voter => voter.id === user.id)
        ) {
            track[opposite] = track[opposite].filter(voter => voter.id !== user.id);
            track[vote] = track[vote].filter(voter => voter.id !== user.id);
            track[vote].push(user);
            await this.trackRepository.save(track);
        } else if (track[vote].filter(voter => voter.id === user.id).length < 1) {
            track[vote].push(user);
            await this.trackRepository.save(track);
        } else {
            throw new HttpException('Unable to cast track', HttpStatus.BAD_REQUEST);
        }

        return track;
    }

    async upvote(trackId: number, userId: string): Promise<TrackRO> {
        const [track, user] = await Promise.all([this.findOrCreateNewOne(trackId), this.userRepository.findOne({ where: { id: userId } })]);

        const [inTrack, outTrack] = await Promise.all([this.vote(track, user, Votes.UP), TrackApi.readTrack(trackId)]);
        return this.toTrackResponseObject({ ...inTrack, ...outTrack });
    }

    async downvote(trackId: number, userId: string): Promise<TrackRO> {
        const [track, user] = await Promise.all([this.findOrCreateNewOne(trackId), this.userRepository.findOne({ where: { id: userId } })]);

        const [inTrack, outTrack] = await Promise.all([this.vote(track, user, Votes.DOWN), TrackApi.readTrack(trackId)]);
        return this.toTrackResponseObject({ ...inTrack, ...outTrack });
    }

    async readTrack(trackId: number): Promise<TrackRO> {
        const [inTrack, outTrack] = await Promise.all([this.findOrCreateNewOne(trackId), TrackApi.readTrack(trackId)]);
        return this.toTrackResponseObject({ ...inTrack, ...outTrack });
    }

    async findTrack(key: string): Promise<TrackRO[]> {
        const tracks = await TrackApi.findTrack(key);
        return tracks.map(track => this.toTrackResponseObject(track));
    }

    toTrackResponseObject(track: any): TrackRO {
        const trackRO: any = {
            ...track,
            trackId: undefined,
            upVoteLink: `${config.apiUrl}/track/${track.trackId}/upvote`,
            downVoteLink: `${config.apiUrl}/track/${track.trackId}/downvote`
        };

        if (track.upVotes) {
            trackRO.upVotes = track.upVotes.map(voter => voter.toResponseObject(false));
            trackRO.nbUpVotes = track.upVotes.length;
        }
        if (track.downVotes) {
            trackRO.downVotes = track.downVotes.map(voter => voter.toResponseObject(false));
            trackRO.nbDownVotes = track.downVotes.length;
        }

        return trackRO;
    }
}
