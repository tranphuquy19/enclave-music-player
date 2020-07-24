import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO, UserRO } from './user.dto';
import { IdeaEnitity } from 'src/idea/idea.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        @InjectRepository(IdeaEnitity)
        private ideaRepository: Repository<IdeaEnitity>
    ) { }

    async showAll(): Promise<UserRO[]> {
        const users = await this.userRepository.find({relations: ['ideas']});
        return users.map(user => user.toResponseObject(false));
    }

    async login(data: UserDTO): Promise<UserRO> {
        const { username, password } = data;
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user || !(await user.comparePassword(password))) {
            throw new HttpException('Invalid username/password', HttpStatus.FORBIDDEN);
        }
        return user.toResponseObject();
    }

    async register(data: UserDTO): Promise<UserRO> {
        const { username } = data;
        let user = await this.userRepository.findOne({ where: { username } });
        if (user) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }
        user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user.toResponseObject();
    }
}
