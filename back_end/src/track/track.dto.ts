import { ApiProperty } from '@nestjs/swagger';
import { ArtistRO } from 'src/artist/artist.dto';
import { AlbumRO } from 'src/album/album.dto';
import { Type, Exclude, Expose, Transform } from 'class-transformer';
import moment from 'moment';
import { UserRO } from '../user/user.dto';

export class TrackDTO { }

@Exclude()
export class TrackRO {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    readable: boolean;

    @Expose()
    @ApiProperty()
    titleShort: string;

    @Expose()
    @ApiProperty()
    titleVersion: string;

    @Expose()
    @ApiProperty()
    link: string;

    @Expose()
    @ApiProperty()
    duration: number;

    @Expose()
    @ApiProperty()
    rank: number;

    @Expose()
    @Type(() => Date)
    @Transform(value => moment(value), { toClassOnly: true })
    @ApiProperty()
    releaseDate?: Date;

    @Expose()
    @ApiProperty()
    preview: string;

    @Expose()
    @ApiProperty()
    type: string;

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty({ type: () => ArtistRO, isArray: true })
    contributors: ArtistRO[];

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty({ type: () => ArtistRO })
    artist: ArtistRO;

    @Expose()
    @Type(() => AlbumRO)
    @ApiProperty({ type: () => AlbumRO })
    album: AlbumRO;

    @ApiProperty()
    upVoteLink: string;

    @ApiProperty()
    downVoteLink: string;

    @ApiProperty({ type: () => UserRO, isArray: true })
    upVotes: UserRO[];

    @ApiProperty({ type: () => UserRO, isArray: true })
    downVotes: UserRO[];

    @ApiProperty()
    nbUpVotes: number;

    @ApiProperty()
    nbDownVotes: number;
}