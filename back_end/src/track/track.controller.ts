import { Controller, Get, Param, Query } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackRO, TrackDTO } from './track.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('track')
@ApiTags('Track')
export class TrackController {
    constructor(private trackService: TrackService) { }

    @Get(':id')
    @ApiOperation({ summary: 'Read track' })
    @ApiResponse({ type: TrackRO, status: 200 })
    read(@Param('id') id: number): Promise<TrackDTO> {
        return this.trackService.readTrack(id);
    }

    @Get()
    @ApiOperation({ summary: "Find track" })
    @ApiResponse({ type: [TrackRO], status: 200 })
    find(@Query('key') key: string): Promise<TrackRO[]> {
        console.log(key);
        return this.trackService.findTrack(key);
    }
}
