import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver('Album')
export class AlbumResolver {

    @Query()
    artist(@Args('id') id: Number) {
        return {id: 123};
    }
}
