import { ApiProperty } from '@nestjs/swagger';
import { ArtistRO } from "src/artist/artist.dto";
import { AlbumRO } from "src/album/album.dto";
import { Type, Exclude, Expose } from "class-transformer";

export class TrackDTO {
    id: Number;
    readable: Boolean;
    titleShort: String;
    titleVersion: String;
    link: String;
    duration: Number;
    rank: Number;
    preview: String;
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