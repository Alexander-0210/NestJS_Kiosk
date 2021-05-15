export class JobFinishedDto{
    id:number;
    user_id:number;
    machine_id:number;
    machine_type:number;
    program_id:number;
    options:number;
    price:number;
    need_sms:number;
    dt:Date;
    status:string;
    finish_dt:Date;
    dryer_used:number;
}