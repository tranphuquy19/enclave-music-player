import { Exclude, Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ArtistDTO {

}

@Exclude()
export class ArtistRO {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty()
    name: string;

    @Expose()
    @ApiProperty()
    link: string;

    @Expose()
    @ApiProperty()
    share: string;

    @Expose()
    @ApiProperty()
    picture: string;

    @Expose()
    @ApiProperty()
    pictureSmall: string;

    @Expose()
    @ApiProperty()
    pictureMedium: string;

    @Expose()
    @ApiProperty()
    pictureBig: string;

    @Expose()
    @ApiProperty()
    pictureXl: string;

    @Expose()
    @ApiProperty()
    radio: boolean;

    @Expose()
    @ApiProperty()
    tracklist: string;

    @Expose()
    @ApiProperty()
    type: string;
}