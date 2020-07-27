import { Controller, Get, Param } from '@nestjs/common';
import { AlbumService } from './album.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AlbumRO } from './album.dto';

@Controller('album')
@ApiTags('album')
export class AlbumController {
    constructor(private albumService: AlbumService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read album' })
    @ApiResponse({ type: AlbumRO, status: 200 })
    read(@Param('id') id: number): Promise<AlbumRO> {
        return this.albumService.readAlbum(id);
    }
}
