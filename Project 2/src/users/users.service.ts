import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: any = [{
        id: 0,
        name: 'Abdulrahman',
    }]

    findAll() {
        return this.users;
    }

    findUserByID(userID: number) {
        return this.users.find(user => user.id == userID);
    }
}
