import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { AlbumService } from './album.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AlbumRO } from './album.dto';
import { FindOneParams } from '../shared/pipes.params';

@Controller('album')
@ApiTags('album')
export class AlbumController {
    constructor(private albumService: AlbumService) { }

    @ApiOperation({ summary: 'Read album' })
    @Get(':id')
    @UsePipes(ValidationPipe)
    read(@Param() { id }: FindOneParams): Promise<AlbumRO> {
        return this.albumService.readAlbum(id);
    }
}
