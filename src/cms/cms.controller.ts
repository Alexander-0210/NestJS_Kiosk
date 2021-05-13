import { Controller, Get } from '@nestjs/common';

@Controller('cms')
export class CmsController {

    @Get('dashboard')
    getDashboard() : string{
        return "Dashboard";
    }

    @Get('transactions')
    getTransaction() : string{
        
    }

}
