import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import { CMSKioskIncome, CMSUser } from './schema/cms.schema';



@Injectable()
export class CmsService {
/*
    constructor(
        @InjectModel('kiosk_income') private readonly cmsKioskModel: Model<CMSKioskIncome>,
        @InjectModel('user') private readonly cmsUserModel: Model<CMSUser> // inject Size here
      ) {}
    
      async findAll(): Promise<any> {          
        return await this.cmsKioskModel.find().populate('userphone','phone balance', this.cmsUserModel) // you can even reference the injections here if you need
          .exec();
      }
*/
}
