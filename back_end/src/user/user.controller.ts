import { Controller, Get, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, UserRO } from './user.dto';
import { AuthGuard } from '../shared/auth.gaurd';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller()
@ApiTags('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('users')
    @UseGuards(new AuthGuard())
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Read users' })
    @ApiResponse({ type: [UserDTO], status: 200 })
    index(): Promise<UserRO[]> {
        return this.userService.showAll();
    }

    @Post('login')
    @UsePipes(ValidationPipe)
    login(@Body() data: UserDTO): Promise<UserRO> {
        return this.userService.login(data);
    }

    @Post('register')
    @UsePipes(ValidationPipe)
    register(@Body() data: UserDTO): Promise<UserRO> {
        return this.userService.register(data);
    }
}
