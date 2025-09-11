import { Injectable } from '@nestjs/common';
import { ConsumersService } from 'src/consumers/consumers.service';

@Injectable()
export class AuthService {
    constructor(private readonly consumersService: ConsumersService) {}

    async validateConsumer(username: string, password: string): Promise<any> {
        const user = await this.consumersService.findOne(username);

        if (user && user.password === password) {
            const {username, password, ...rest} = user;
            return rest;
        }

        return null;
    }
}
