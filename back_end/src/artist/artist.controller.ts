import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
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
    @ApiResponse({ type: ArtistRO, status: 200 })
    read(@Param() { id }: FindOneParams): Promise<ArtistRO> {
        if (!id) throw new HttpException(`Bad request`, HttpStatus.BAD_REQUEST);
        return this.artistService.readArtist(id);
    }
}
