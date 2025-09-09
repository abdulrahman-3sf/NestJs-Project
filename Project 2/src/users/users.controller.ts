import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOkResponse({type: User, isArray: true})
    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @ApiOkResponse({type: User})
    @ApiNotFoundResponse()
    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.usersService.getUserById(id);
    }

    @ApiCreatedResponse({type: User})
    @ApiBadRequestResponse()
    @Post()
    async createUser(@Body() body: CreateUserDto): Promise<User> {
        return this.usersService.createUser(body);
    }

    @ApiOkResponse({type: User})
    @ApiNotFoundResponse()
    @Patch()
    async updateUser(@Body() body: UpdateUserDto): Promise<User> {
        return this.usersService.updateUser(body);
    }
}
