import { Injectable } from '@nestjs/common';
import { ConsumersService } from 'src/consumers/consumers.service';

@Injectable()
export class AuthService {
    constructor(private readonly consumersService: ConsumersService) {}

    async validateConsumer(username: string, password: string): Promise<any> {
        const consumer = await this.consumersService.findOne(username);

        if (consumer && consumer.password === password) {
            const {username, password, ...rest} = consumer;
            return rest;
        }

        return null;
    }
}
