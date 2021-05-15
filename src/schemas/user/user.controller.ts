import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    async create(@Body() createUser:UserDto){
        await this.userService.create(createUser);
    }

    @Get()
    async findAll():Promise<User[]>{
        return this.userService.findAll();
    }    
        
    @Get(':name')
    findOne(@Param() params): Promise<User> {
        console.log(params.name);
        return this.userService.findOneByID(params.name);
    }
}
