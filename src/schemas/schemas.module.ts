import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { CatsModule } from './cats/cats.module';
import { SchemasController } from './schemas.controller';
import { UserModule } from './user/user.module';

const routes:Routes = [
    {
        path:'schemas',
        children:[
            {
                path:'/2',
                module: UserModule
            },
            
            {
                path:'/1',
                module: CatsModule
            }
        ]
    }
]

@Module({
    imports:[ RouterModule.forRoutes(routes), 
    CatsModule,
    UserModule,
    ],
    controllers: [SchemasController]
})
export class SchemasModule {}
