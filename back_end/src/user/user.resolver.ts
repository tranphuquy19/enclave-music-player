import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserRO } from './user.dto';

@Resolver('User')
export class UserResolver {
    constructor(private userService: UserService) { }

    @Query()
    users() : Promise<UserRO[]>{
        return this.userService.showAll();
    }
}
