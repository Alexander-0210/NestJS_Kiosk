import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AdminService } from './admin.service';
import { AdminDto } from './dto/admin.dto';
import { Admin } from './schema/admin.schema';

@Controller('admin')
export class AdminController {
    constructor(private readonly userService:AdminService){}

    @Post()
    async create(@Body() createUser:AdminDto){
        await this.userService.create(createUser);
    }

    @Get()
    async findAll():Promise<Admin[]>{
        return this.userService.findAll();
    }    
        
    @Get(':name')
    findOne(@Param() params): Promise<Admin> {
        console.log(params.name);
        return this.userService.findOneByID(params.name);
    }
}
