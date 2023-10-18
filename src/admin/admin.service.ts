import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { Repository } from 'typeorm';
import { AdminInfo } from './admin.dto';
import { ManagerEntity } from 'src/manager/manager.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminEntity) 
    private adminRepo: Repository<AdminEntity>,

    @InjectRepository(ManagerEntity) 
    private managerRepo: Repository<ManagerEntity>
  )
  {}
  getAll(): Promise<AdminEntity[]> {
    return this.adminRepo.find(
      {
        select:{
          name: true,
          username: true
        
        }
        
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

  addManager(managerInfo)
  {
return this.managerRepo.save(managerInfo);
  }

getManagers(id:number)
{
 return this.adminRepo.find(
    {
      where: {id:id},
      relations: {managers:true}

    }
  )
}
getAdminByManager(id:number)
{
return this.managerRepo.find(
  {
    where: {id:id},
    relations: {admin:true}

  }

)

}
}
