import { Injectable } from '@nestjs/common';
import { ConsumersService } from 'src/consumers/consumers.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly consumersService: ConsumersService,
        private readonly jwtService: JwtService
    ) {}

    async validateConsumer(username: string, password: string): Promise<any> {
        const consumer = await this.consumersService.findOne(username);

        if (consumer && consumer.password === password) {
            const {username, password, ...rest} = consumer;
            return rest;
        }

        return null;
    }

    async login(user: any) {
        const payload = {name: user.name, sub: user.id};

        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}
