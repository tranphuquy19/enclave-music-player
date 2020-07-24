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
    @ApiProperty({ name: "id", description: " of Track" })
    id: number;

    @Expose()
    @ApiProperty({ name: "readable", description: " of Track" })
    readable: boolean;

    @Expose()
    @ApiProperty({ name: "titleShort", description: " of Track" })
    titleShort: string;

    @Expose()
    @ApiProperty({ name: "titleVersion", description: " of Track" })
    titleVersion: string;

    @Expose()
    @ApiProperty({ name: "link", description: " of Track" })
    link: string;

    @Expose()
    @ApiProperty({ name: "duration", description: " of Track" })
    duration: number;

    @Expose()
    @ApiProperty({ name: "rank", description: " of Track" })
    rank: number;

    @Expose()
    @ApiProperty({ name: "preview", description: " of Track" })
    preview: string;

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty({ name: "contributors", description: " of Track" })
    contributors: ArtistRO[];

    @Expose()
    @Type(() => ArtistRO)
    @ApiProperty({ name: "artist", description: " of Track" })
    artist: ArtistRO;

    @Expose()
    @Type(() => AlbumRO)
    @ApiProperty({ name: "album", description: " of Track" })
    album: AlbumRO;
}