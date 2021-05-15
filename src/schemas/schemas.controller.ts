import { Controller, Get, Res } from '@nestjs/common';

@Controller('schemas')
export class SchemasController {
    @Get()
    getMain() : string{
        return "Schemas Main Page";
    }

    @Get('dashboard')
    getSchemas() : string{
        return "Schemas Dashboard";
    }

    // @Get('users')
    // redirect(@Res() res){
    //     return res.redirect('/user');
    // }    
}
