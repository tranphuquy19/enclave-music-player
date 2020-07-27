import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { AuthGuard } from '../shared/auth.gaurd';
import { User } from 'src/user/user.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiHeader, ApiResponse } from '@nestjs/swagger';

@Controller('idea')
@ApiTags('idea')
@ApiBearerAuth()
export class IdeaController {
    constructor(private ideaSevice: IdeaService) { }

    @Get()
    @UseGuards(new AuthGuard())
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Read ideas' })
    @ApiResponse({ type: [IdeaDTO], status: 200 })
    index() {
        return this.ideaSevice.showAll();
    }

    @Post()
    @UseGuards(new AuthGuard())
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Create idea' })
    @ApiResponse({ type: IdeaDTO, status: 201 })
    create(@User('id') userId: string, @Body() data: IdeaDTO) {
        return this.ideaSevice.create(userId, data);
    }

    @Get(':id')
    @UseGuards(new AuthGuard())
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Read idea' })
    @ApiResponse({ type: IdeaDTO, status: 200 })
    read(@Param('id') id: string) {
        return this.ideaSevice.read(id);
    }

    @Put(':id')
    @UseGuards(new AuthGuard())
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Update idea' })
    @ApiResponse({ type: [IdeaDTO], status: 202 })
    update(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        return this.ideaSevice.update(id, data);
    }

    @Delete(':id')
    @UseGuards(new AuthGuard())
    @UsePipes(ValidationPipe)
    @ApiOperation({ summary: 'Delete idea' })
    delete(@Param('id') id: string) {
        return this.ideaSevice.destroy(id);
    }
}
