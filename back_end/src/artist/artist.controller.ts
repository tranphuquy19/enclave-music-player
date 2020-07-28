import { Controller, Get, Param } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ArtistRO } from './artist.dto';

@Controller('artist')
@ApiTags('artist')
export class ArtistController {
    constructor(private artistService: ArtistService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read artist' })
    @ApiResponse({ type: ArtistRO, status: 200 })
    read(@Param('id') id: number): Promise<ArtistRO> {
        return this.artistService.readArtist(id);
    }
}
