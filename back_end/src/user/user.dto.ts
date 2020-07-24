import { IsNotEmpty, MinLength, MaxLength, Matches } from "class-validator";
import { IdeaRO } from "src/idea/idea.dto";

export class UserDTO {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    @Matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        {
            message: 'Too weak password. Require minimum 8 characters, at least 1 letter, 1 number and 1 special character',
        },
    )
    password: string;
}

export class UserRO {
    id: string;
    username: string;
    createdAt: Date;
    token?: string;
    ideas: [IdeaRO]
}