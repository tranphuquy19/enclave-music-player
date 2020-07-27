import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('playlist')
@ApiTags('playlist')
export class PlaylistController {}
