import { Type, Exclude, Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import moment from 'moment';
import { TrackRO } from '../track/track.dto';
import { ArtistRO } from '../artist/artist.dto';

export class AlbumDTO { }

@Exclude()
export class AlbumRO {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    title: string;

    @Expose()
    @ApiProperty()
    link: string;

    @Expose()
    @ApiProperty()
    cover: string;

    @Expose()
    @ApiProperty()
    coverSmall: string;

    @Expose()
    @ApiProperty()
    coverMedium: string;

    @Expose()
    @ApiProperty()
    coverBig: string;

    @Expose()
    @ApiProperty()
    coverXl: string;

    @Expose()
    @Type(() => Date)
    @Transform(value => moment(value), { toClassOnly: true })
    @ApiProperty()
    releaseDate: Date;

    @Expose()
    @ApiProperty()
    tracklist: string;

    @Expose()
    @Type(() => TrackRO)
    @ApiProperty({ type: () => TrackRO, isArray: true })
    tracks: TrackRO[];

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty({type: () => ArtistRO})
    artist: ArtistRO;

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty({type: () => ArtistRO, isArray: true})
    contributors: ArtistRO[];

    @Expose()
    @ApiProperty()
    type: string;
}
