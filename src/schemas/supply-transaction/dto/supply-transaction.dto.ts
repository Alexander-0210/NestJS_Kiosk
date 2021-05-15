export class SupplyTransactionDto{
    id:number;
    dt:Date;
    supply_id:number;
    price:number;
    count:number;
    action:string;
    org_qty:number;
    new_qty:number;
    type:string;
}