import { Controller, Get, Param, Query } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackRO } from './track.dto';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { FindOneParams } from '../shared/pipes.params';

@Controller('track')
@ApiTags('Track')
export class TrackController {
    constructor(private trackService: TrackService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read track' })
    @ApiResponse({ type: TrackRO, status: 200 })
    read(@Param() { id }: FindOneParams): Promise<TrackRO> {
        return this.trackService.readTrack(id);
    }

    @Get()
    @ApiOperation({ summary: 'Find track' })
    @ApiResponse({ type: [TrackRO], status: 200 })
    find(@Query('key') key: string): Promise<TrackRO[]> {
        return this.trackService.findTrack(key);
    }
}
