import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOkResponse({type: User, isArray: true})
    @ApiQuery({name: 'name', required: false})
    @Get()
    getUsers(@Query('name') name?: string): User[] {
        return this.usersService.findAll(name);
    }

    @ApiOkResponse({type: User})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id') id: string): User | undefined {
        const user = this.usersService.findUserByID(Number(id)); // TODO: auto parse id
        
        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }

    @ApiCreatedResponse({type: User})
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body);
    }
}
