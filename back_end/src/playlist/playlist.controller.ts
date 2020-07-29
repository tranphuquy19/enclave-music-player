import { Controller, Get, Param } from '@nestjs/common';
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
    read(@Param() { id }: FindOneParams): Promise<PlaylistRO> {
        return this.playlistService.readPlaylist(id);
    }
}
