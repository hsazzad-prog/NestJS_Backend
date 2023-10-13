import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { Repository } from 'typeorm';
import { AdminInfo } from './admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity) 
    private adminRepo: Repository<AdminEntity>
  )
  {}
  getHello(): string {
    return 'Hello World!';
  }

  addAdmin(adminInfo:AdminInfo):Promise<AdminEntity>
  {
   const res = this.adminRepo.save(adminInfo);
   return res;
  }


}
