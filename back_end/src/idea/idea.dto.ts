import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRO } from '../user/user.dto';

export class IdeaDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example: 'Idea name', description: 'Name of idea'
    })
    idea: string;

    @IsString()
    @ApiProperty({
        example: 'Idea description', description: 'Description of idea'
    })
    description: string;
}

export class IdeaRO {
    id?: string;
    createdAt: Date;
    updatedAt: Date;
    idea: string;
    description: string;
    author: UserRO;
}