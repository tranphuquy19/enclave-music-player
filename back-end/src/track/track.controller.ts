import { Controller, Get, Param } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('track')
export class TrackController {
    constructor(private trackService: TrackService) { }

    @Get(':id')
    read(@Param('id') id: number) {
        return this.trackService.readTrack(id);
    }
}
