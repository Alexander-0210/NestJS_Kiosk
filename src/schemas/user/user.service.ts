import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ){}

    async create(createUserDto : UserDto) : Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAllFromPhoneBalance() : Promise<User[]> {
        //var query = {phone:1, balance:1};
        return this.userModel.find({}, "balance phone").exec();
        //return this.userModel.find().exec();
    }
    
    async findAll() : Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOneByID(phone) : Promise<User> {
        return this.userModel.findOne({phone}).exec();
    }
/*
    async findAllKiosks(kiosk_date) : Promise<User> {
        var query = {}
        //return this.userModel.ag
    }
    */
}
