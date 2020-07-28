import { Scalar } from '@nestjs/graphql';

@Scalar('BigInt')
export class BigIntScalar {
    description = 'BigInt custom scalar type';

    parseValue(value) {
        return Number(value);
    }

    serialize(value: Number) {
        return value;
    }
}