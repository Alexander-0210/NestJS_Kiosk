import { Controller, Get } from '@nestjs/common';
import { Supply } from './schema/supply.schema';
import { SupplyService } from './supply.service';

@Controller('supply')
export class SupplyController {    
    constructor(private readonly supplyService:SupplyService){}
    @Get()
    getAll():Promise<Supply[]>
    {
        return this.supplyService.findAll();
    }
}
