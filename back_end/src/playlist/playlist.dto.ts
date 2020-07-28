import { ArtistRO } from '../artist/artist.dto';
import { TrackRO } from '../track/track.dto';
import { Exclude, Expose, Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import moment from 'moment';

export class PlaylistDTO {}

@Exclude()
export class PlaylistRO {
    @Expose()
    @ApiProperty()
    id: string;

    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    description: string;

    @Expose()
    @ApiProperty()
    duration: number;

    @Expose()
    @ApiProperty()
    public: boolean;

    @Expose()
    @ApiProperty()
    nbTracks: number;

    @Expose()
    @ApiProperty()
    fans: number;

    @Expose()
    @ApiProperty()
    link: string;

    @Expose()
    @ApiProperty()
    share: string;

    @Expose()
    @ApiProperty()
    picture: string;

    @Expose()
    @ApiProperty()
    pictureSmall: string;

    @Expose()
    @ApiProperty()
    pictureMedium: string;

    @Expose()
    @ApiProperty()
    pictureBig: string;

    @Expose()
    @ApiProperty()
    pictureXl: string;

    @Expose()
    @ApiProperty()
    tracklist: string;

    @Expose()
    @Type(type => Date)
    @Transform(value => moment(value), { toClassOnly: true })
    @ApiProperty()
    creationDate: Date;

    @Expose()
    @ApiProperty()
    creator: ArtistRO;

    @Expose()
    @ApiProperty()
    type: string;

    @Expose()
    @ApiProperty()
    tracks: TrackRO[];
}