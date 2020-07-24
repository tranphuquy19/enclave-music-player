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
    @ApiProperty()
    name: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    link: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    share: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    picture: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    pictureSmall: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    pictureMedium: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    pictureBig: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    pictureXl: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    radio: boolean;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    tracklist: string;

    @Expose()
    @ApiProperty()
    @ApiProperty()
    type: string;
}