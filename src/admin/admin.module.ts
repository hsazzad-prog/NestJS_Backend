import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { ManagerEntity } from 'src/manager/manager.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity, ManagerEntity])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
