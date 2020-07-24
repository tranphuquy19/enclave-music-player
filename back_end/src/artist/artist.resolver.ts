import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver('Artistt')
export class ArtistResolver {

    @Query()
    artist(@Args('id') id: Number) {
        return {};
    }
}
