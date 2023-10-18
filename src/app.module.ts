import { Module } from '@nestjs/common';
import { ManagerController } from 'src/manager/manager.controller';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [AdminModule,
    TypeOrmModule.forRoot(
      { type: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'postgres',
       password: 'root',
       database: 'xyz',//Change to your database name
       autoLoadEntities: true,
       synchronize: true,
       } ),
      
  
  ],
  controllers: [ManagerController],
  providers: [],
})
export class AppModule {}
