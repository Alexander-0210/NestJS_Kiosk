import { Module } from '@nestjs/common';

import { CmsController } from './cms.controller';
import { UserService } from 'src/schemas/user/user.service';
import { UserModule } from 'src/schemas/user/user.module';
import { CmsService } from './cms.service';

@Module({
    controllers: [CmsController],
    imports:[UserModule],
    providers:[CmsService]
})
export class CmsModule {}
