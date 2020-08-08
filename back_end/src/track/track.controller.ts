import { Controller, Get, Param, Query, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackRO } from './track.dto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { FindOneParams } from '../shared/pipes.params';
import { AuthGuard } from '../shared/auth.gaurd';
import { User } from 'src/user/user.decorator';

@Controller('track')
@ApiTags('Track')
export class TrackController {
    constructor(private trackService: TrackService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read track' })
    @ApiResponse({ type: TrackRO, status: 200 })
    read(@Param() { id }: FindOneParams): Promise<TrackRO> {
        if (!id) throw new HttpException(`Bad request`, HttpStatus.BAD_REQUEST);
        return this.trackService.readTrack(id);
    }

    @Get(':id/upvote')
    @UseGuards(new AuthGuard())
    @ApiOperation({ summary: 'Vote up track' })
    @ApiResponse({ type: TrackRO, status: 200 })
    async upvote(@Param('id') trackId: number, @User('id') userId: string): Promise<TrackRO> {
        return await this.trackService.upvote(trackId, userId);
    }

    @Get(':id/downvote')
    @UseGuards(new AuthGuard())
    @ApiOperation({ summary: 'Vote down track' })
    @ApiResponse({ type: TrackRO, status: 200 })
    async downvote(@Param('id') trackId: number, @User('id') userId: string): Promise<TrackRO> {
        return await this.trackService.downvote(trackId, userId);
    }

    @Get()
    @ApiOperation({ summary: 'Find track' })
    @ApiResponse({ type: [TrackRO], status: 200 })
    find(@Query('key') key: string): Promise<TrackRO[]> {
        if (!key) throw new HttpException(`Bad request`, HttpStatus.BAD_REQUEST);
        return this.trackService.findTrack(key);
    }
}
