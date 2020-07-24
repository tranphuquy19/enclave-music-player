import { Type, Exclude, Expose, Transform } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import moment from "moment";

export class AlbumDTO {

}

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

    @Type(() => Date)
    @Transform(value => moment(value), { toClassOnly: true })
    @Expose()
    @ApiProperty()
    releaseDate: Date;

    @Expose()
    @ApiProperty()
    tracklist: string;

    @Expose()
    @ApiProperty()
    type: string;
}
