import { Type, Exclude, Expose } from "class-transformer";

export class AlbumDTO {

}

@Exclude()
export class AlbumRO {
    @Expose()
    id: number;

    @Expose()
    title: string;

    @Expose()
    link: string;

    @Expose()
    cover: string;

    @Expose()
    coverSmall: string;

    @Expose()
    coverMedium: string;

    @Expose()
    coverBig: string;

    @Expose()
    coverXl: string;

    @Type(() => Date)
    @Expose()
    releaseDate: Date;

    @Expose()
    tracklist: string;
    
    @Expose()
    type: string;
}
