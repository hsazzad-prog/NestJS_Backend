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
  getAll(): Promise<AdminEntity[]> {
    return this.adminRepo.find(
      {
        select:{
          name: true,
          username: true
        
        },
         where: [
           { name: "Timber"},
           {username: "Stan" },
         ]
        }
        )
          
        }
      
    );
  }

getUserByID(id:number): Promise<AdminEntity> {
return this.adminRepo.findOneBy({id:id});
}

 async addAdmin(adminInfo:AdminInfo):Promise<AdminEntity[]>
  {
   const res = await this.adminRepo.save(adminInfo);
   return this.adminRepo.find();
  }

  updateAdmin(id:number, adminInfo:AdminInfo):Promise<AdminEntity>
  {
   const res=  this.adminRepo.update(id,adminInfo);

     return this.adminRepo.findOneBy({id});
  }


}
