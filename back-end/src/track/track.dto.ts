import { ArtisRO } from "src/artist/artist.dto";
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
    id: number;

    @Expose()
    readable: boolean;

    @Expose()
    titleShort: string;

    @Expose()
    titleVersion: string;

    @Expose()
    link: string;

    @Expose()
    duration: number;

    @Expose()
    rank: number;

    @Expose()
    preview: string;

    @Expose()
    @Type(() => ArtisRO)
    contributors: ArtisRO[];

    @Expose()
    @Type(() => ArtisRO)
    artist: ArtisRO;

    @Expose()
    @Type(() => AlbumRO)
    album: AlbumRO;
}