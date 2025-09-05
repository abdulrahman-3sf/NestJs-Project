import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [{
        id: 0,
        name: 'Abdulrahman',
    }, {
        id: 1,
        name: 'Fasil',
    }];

    findAll(): User[] {
        return this.users;
    }

    findUserByID(userID: number): User | undefined {
        return this.users.find(user => user.id == userID);
    }

    createUser(createUserDto: CreateUserDto): User {
        const newUser = {
            id: this.users.length,
            ...createUserDto,
        };

        this.users.push(newUser);
        return newUser;
    }
}
