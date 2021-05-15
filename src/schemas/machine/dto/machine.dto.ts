export class MachineDto{
    id:number;
    machine_id:number;
    machine_type_id:number;
    max_weight:number;
    base_soft:string;
    parameter_soft:string;
    cpu_serial:string;
    product_number:string;
    serial_number:string;
    baud_rate:number;
    current_mode:string;
    current_status1:number;
    estimate_time:number;
    total_time:number;
    update_dt:Date;
}