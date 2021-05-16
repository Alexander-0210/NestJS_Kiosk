import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { SettingService } from './setting.service';
import { SettingDto } from './dto/setting.dto';
import { Setting, SettingDocument } from './schema/setting.schema';

@Controller('setting')
export class SettingController {
    constructor(private readonly userService:SettingService){}

    @Post()
    async create(@Body() createUser:SettingDto){
        await this.userService.create(createUser);
    }

    @Get()
    async findAll():Promise<Setting[]>{
        return this.userService.findAll();
    }    
        
    @Get(':name')
    findOne(@Param() params): Promise<Setting> {
        console.log(params.name);
        return this.userService.findOneByID(params.name);
    }
}