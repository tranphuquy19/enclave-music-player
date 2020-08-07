import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PlaylistService } from './playlist.service';
import { PlaylistRO } from './playlist.dto';
import { FindOneParams } from '../shared/pipes.params';

@Controller('playlist')
@ApiTags('playlist')
export class PlaylistController {
    constructor(private playlistService: PlaylistService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read playlist' })
    @ApiResponse({ type: PlaylistRO, status: 200 })
    read(@Param() { id }: FindOneParams): Promise<PlaylistRO> {
        if (!id) throw new HttpException(`Bad request`, HttpStatus.BAD_REQUEST);
        return this.playlistService.readPlaylist(id);
    }
}
