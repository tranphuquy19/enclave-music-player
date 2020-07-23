import { Exclude, Expose } from "class-transformer";

export class ArtistDTO {

}

@Exclude()
export class ArtisRO {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    link: string;

    @Expose()
    share: string;

    @Expose()
    picture: string;

    @Expose()
    pictureSmall: string;

    @Expose()
    pictureMedium: string;

    @Expose()
    pictureBig: string;

    @Expose()
    pictureXl: string;

    @Expose()
    radio: true;

    @Expose()
    tracklist: string;
    
    @Expose()
    type: string;
}