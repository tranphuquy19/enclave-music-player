import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PlaylistService } from './playlist.service';
import { PlaylistRO } from './playlist.dto';

@Controller('playlist')
@ApiTags('playlist')
export class PlaylistController {
    constructor(private playlistService: PlaylistService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read playlist' })
    @ApiResponse({ type: PlaylistRO, status: 200 })
    read(@Param('id') id: number): Promise<PlaylistRO> {
        return this.playlistService.readPlaylist(id);
    }
}
