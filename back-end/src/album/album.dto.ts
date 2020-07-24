import { Type, Exclude, Expose, Transform } from "class-transformer";
import moment from 'moment';

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
    @Transform(value => moment(value), { toClassOnly: true })
    @Expose()
    releaseDate: Date;

    @Expose()
    tracklist: string;

    @Expose()
    type: string;
}
