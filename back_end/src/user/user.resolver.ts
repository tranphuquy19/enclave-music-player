import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserRO, UserDTO, UserLoginRegister } from './user.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../shared/auth.gaurd';

@Resolver('User')
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query()
    @UseGuards(new AuthGuard())
    whoami(@Context('user') user: UserDTO): Promise<UserRO> {
        const { username } = user;
        return this.userService.findByUsername(username);
    }

    @Query()
    @UseGuards(new AuthGuard())
    users(): Promise<UserRO[]> {
        return this.userService.showAll();
    }

    @Mutation()
    login(@Args() { username, password }: UserLoginRegister): Promise<UserRO> {
        const user: UserDTO = { username, password };
        return this.userService.login(user);
    }

    @Mutation()
    register(@Args() { username, password }: UserLoginRegister): Promise<UserRO> {
        const user: UserDTO = { username, password };
        return this.userService.register(user);
    }
}
