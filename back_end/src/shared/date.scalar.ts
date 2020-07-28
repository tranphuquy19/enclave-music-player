import { Scalar } from "@nestjs/graphql";
import moment, { Moment } from "moment";
import { KindEnum, Kind } from "graphql";

@Scalar('Date')
export class DateScalar {
    description = 'Date custom scalar type';

    parseValue(value) {
        return moment(value);
    }

    serialize(value: Moment) {
        return value.toISOString();
    }
}