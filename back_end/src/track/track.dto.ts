import { ApiProperty } from '@nestjs/swagger';
import { ArtistRO } from "src/artist/artist.dto";
import { AlbumRO } from "src/album/album.dto";
import { Type, Exclude, Expose, Transform } from 'class-transformer';
import moment from 'moment';

export class TrackDTO {
    id: number;
    readable: boolean;
    titleShort: string;
    titleVersion: string;
    link: string;
    duration: number;
    rank: number;
    preview: string;
}
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
    releaseDate: Date;

    @Expose()
    @ApiProperty()
    preview: string;

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty()
    contributors: ArtistRO[];

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty()
    artist: ArtistRO;

    @Expose()
    @Type(() => AlbumRO)
    @ApiProperty()
    album: AlbumRO;
}