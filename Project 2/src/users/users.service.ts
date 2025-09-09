import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {}

    async getAll(): Promise<User[]> {
        return await this.usersRepository.find({
            relations: ['pets']
        }); // SELECT * from user JOIN pet
    }

    async getUserById(id: number): Promise<User> {
        try {
            return await this.usersRepository.findOneOrFail({where: {id}});
        } catch (error) {
            throw new NotFoundException(`User with this ${id} id not found!`);
        }
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create(createUserDto);
        return await this.usersRepository.save(newUser); // INSERT
    }

    async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.getUserById(updateUserDto.id);

        user.name = updateUserDto.name;
        
        return this.usersRepository.save(user); // UPDATE
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.getUserById(id);

        return this.usersRepository.remove(user);
    }
}
