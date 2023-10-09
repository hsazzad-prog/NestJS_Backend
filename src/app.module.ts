import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [AdminModule],
  controllers: [ManagerController],
  providers: [],
})
export class AppModule {}
