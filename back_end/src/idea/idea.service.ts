import { Injectable, NotFoundException, HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEnitity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDTO, IdeaRO } from './idea.dto';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class IdeaService {
    constructor(
        @InjectRepository(IdeaEnitity)
        private ideaRepository: Repository<IdeaEnitity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) { }

    toResponseObject(idea: IdeaEnitity): IdeaRO {
        const responseObject: any = {
            ...idea,
            author: idea.author ? idea.author.toResponseObject(false) : null,
        };
        return responseObject;
    }

    async showAll(): Promise<IdeaRO[]> {
        const ideas = await this.ideaRepository.find({ relations: ['author'] });
        return ideas.map(idea => this.toResponseObject(idea));
    }

    async create(userId: string, data: Partial<IdeaDTO>): Promise<IdeaRO> {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        const idea = await this.ideaRepository.create({ ...data, author: user });
        await this.ideaRepository.save(idea);
        return { ...idea, author: idea.author.toResponseObject(false) };
    }

    async read(id: string): Promise<IdeaRO> {
        const idea = await this.ideaRepository.findOne({ where: { id }, relations: ['author'] });
        if (!idea) {
            throw new HttpException(`Idea with ID: ${id} not found!`, HttpStatus.NOT_FOUND);
        } else return this.toResponseObject(idea);
    }

    async update(id: string, data: Partial<IdeaDTO>): Promise<IdeaRO> {
        let idea = await this.ideaRepository.findOne({ where: { id } });
        if (!idea) {
            throw new HttpException(`Idea with ID: ${id} not found!`, HttpStatus.NOT_FOUND);
        } else {
            await this.ideaRepository.update({ id }, data);
            idea = await this.ideaRepository.findOne({ where: { id }, relations: ['author'] });
        }
        return this.toResponseObject(idea);
    }

    async destroy(id: string) {
        let idea = await this.ideaRepository.findOne({ where: { id }, relations: ['author'] });
        if (!idea) {
            throw new HttpException(`Idea with ID: ${id} not found!`, HttpStatus.NOT_FOUND);
        } else {
            await this.ideaRepository.delete({ id });
        }
        return { deleted: true };
    }
}
