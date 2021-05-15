import { Controller, Get, Param, Res } from '@nestjs/common';
import { UserService } from '../schemas/user/user.service';
import { User } from '../schemas/user/schema/user.schema';
@Controller('cms')
export class CmsController {
    
    constructor(private userService:UserService) {}
    @Get()
    getMain():string{
        return "CMS Main Page";
    }

    @Get('dashboard')
    getDashboard() : string{
        return "CMS Dashboard";
    }

    @Get('all')
    getAll(): Promise<User[]> {
        return this.userService.findAll();
    }
/*
    @Get(':transactions')
    findOne(@Param() params): Promise<User> {
        console.log(params.name);
        return this.userService.findOneByID(params.name);
    }
*/
}
