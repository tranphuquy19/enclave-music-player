import { Controller, Get, Param, UsePipes, ValidationPipe, HttpException, HttpStatus } from '@nestjs/common';
import { AlbumService } from './album.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AlbumRO } from './album.dto';
import { FindOneParams } from '../shared/pipes.params';

@Controller('album')
@ApiTags('album')
export class AlbumController {
    constructor(private albumService: AlbumService) { }

    @ApiOperation({ summary: 'Read album' })
    @ApiResponse({ type: AlbumRO, status: 200 })
    @ApiResponse({ status: 404 })
    @Get(':id')
    @UsePipes(ValidationPipe)
    read(@Param() { id }: FindOneParams): Promise<AlbumRO> {
        if (!id) throw new HttpException(`Bad request`, HttpStatus.BAD_REQUEST);
        return this.albumService.readAlbum(id);
    }
}
