import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDto } from './dto/admin.dto';
import { Admin, AdminDocument } from './schema/admin.schema';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin.name) private readonly adminModel:Model<AdminDocument>
    ){}

    async create(adminDto : AdminDto) : Promise<Admin> {
        const createdAdmin = new this.adminModel(adminDto);
        return createdAdmin.save();
    }

    async findAll() : Promise<Admin[]>{
        return this.adminModel.find().exec();
    }

    async findOneByID(email) : Promise<Admin | undefined> {
        return this.adminModel.findOne({email}).exec();
    }
}
