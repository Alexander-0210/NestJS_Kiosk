export class TransactionDto{
    id:number;
    user_id:number;
    reason:string;
    machine_id:number;
    machine_type:number;
    program_id:number;
    options:number;
    price:number;
    org_price:number;
    balance:number;
    method:string;
    dt:Date;
}