import { Controller, Get, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, UserRO } from './user.dto';
import { AuthGuard } from '../shared/auth.gaurd';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@Controller()
@ApiTags('users')
export class UserController {
    constructor(private userService: UserService) { }

    @ApiBearerAuth()
    @ApiOperation({ summary: 'Read users' })
    @ApiResponse({ type: [UserRO], status: 200 })
    @Get('users')
    @UseGuards(new AuthGuard())
    index(): Promise<UserRO[]> {
        return this.userService.showAll();
    }

    @ApiOperation({ summary: 'User login' })
    @ApiResponse({ type: UserRO, status: 200 })
    @Post('login')
    @UsePipes(ValidationPipe)
    login(@Body() data: UserDTO): Promise<UserRO> {
        return this.userService.login(data);
    }

    @ApiOperation({ summary: 'User register' })
    @ApiResponse({ type: UserRO, status: 201 })
    @Post('register')
    @UsePipes(ValidationPipe)
    register(@Body() data: UserDTO): Promise<UserRO> {
        return this.userService.register(data);
    }
}
