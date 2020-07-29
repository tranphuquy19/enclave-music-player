import { Controller, Get, Param } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ArtistRO } from './artist.dto';
import { FindOneParams } from '../shared/pipes.params';

@Controller('artist')
@ApiTags('artist')
export class ArtistController {
    constructor(private artistService: ArtistService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read artist' })
    read(@Param() { id }: FindOneParams): Promise<ArtistRO> {
        return this.artistService.readArtist(id);
    }
}
