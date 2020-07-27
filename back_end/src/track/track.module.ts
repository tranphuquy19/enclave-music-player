import { Module, HttpModule } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { TrackResolver } from './track.resolver';

@Module({
  imports: [HttpModule],
  controllers: [TrackController],
  providers: [TrackService, TrackResolver]
})
export class TrackModule {}
