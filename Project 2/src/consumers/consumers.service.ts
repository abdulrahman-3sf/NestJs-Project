import { Injectable } from '@nestjs/common';

export type Consumer = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class ConsumersService {
    private readonly consumers: Consumer[] = [
        {id: 1, name: 'abdulrahman', username: '3sf11', password:'password123'},
        {id: 2, name: 'khaled', username: 're11', password:'123qweasd'}
    ];

    getHello(): string {
        return "Hello World!"
    }

    async findOne(username: string): Promise<Consumer | undefined> {
        return this.consumers.find(consumer => consumer.username == username);
    }
}
