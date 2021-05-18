import { Controller, Get } from '@nestjs/common';
import { KioskIncomeService } from './kiosk-income.service';
import { KioskIncome } from './schema/kiosk-income.schema';

@Controller('kiosk-income')
export class KioskIncomeController {
    constructor(private readonly kioskService:KioskIncomeService){}
    @Get()
    getAll():Promise<KioskIncome[]>
    {
        return this.kioskService.findAll();
    }
}
