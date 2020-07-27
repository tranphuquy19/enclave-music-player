import { Controller, Get, Param } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('artist')
@ApiTags('artist')
export class ArtistController {
    constructor(private artistService: ArtistService) { }

    @Get()
    read(@Param('id') id: Number) {
        return this.artistService.readArtist(id);
    }
}
