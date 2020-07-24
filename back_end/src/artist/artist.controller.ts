import { Controller, Get, Param } from '@nestjs/common';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
    constructor(private artistService: ArtistService) { }

    @Get()
    read(@Param('id') id: Number) {
        return this.artistService.readArtist(id);
    }
}
