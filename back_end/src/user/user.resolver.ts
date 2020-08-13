import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserRO, UserDTO, UserLoginRegister } from './user.dto';

@Resolver('User')
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query()
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
        const user: UserDTO = {username, password};
        return this.userService.register(user);
    }
}
