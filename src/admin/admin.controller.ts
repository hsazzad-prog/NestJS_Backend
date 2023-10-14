import { Body, Controller, Get, Param, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminInfo } from './admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { AdminEntity } from './admin.entity';
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return "hello Mars";
  }

  
  @Get('index')
  getIndex() {
    return this.adminService.getAll();
    
  }

@Get('/searchuserby/:id')
searchUserBy(@Param('id') userID:number): Promise<AdminEntity> {
return this.adminService.getUserByID(userID);
}


@Get('/searchuserbyquery')
searchUserByQuery(@Query() myquery:object): object {
  return myquery;
}

@Get('/searchuserbyobject')
@UsePipes(new ValidationPipe())
searchUserByObject(@Body() myobject:AdminInfo): object {
  return {"name":myobject.name};
}

@Post('upload')
@UseInterceptors(FileInterceptor('myfile',
{ fileFilter: (req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
   cb(null, true);
  else {
   cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
   }
  },
  limits: { fileSize: 30000 },
  storage:diskStorage({
  destination: './upload',
  filename: function (req, file, cb) {
   cb(null,Date.now()+file.originalname)
  },
  })
}
  
))
uploadFile(@UploadedFile() file: Express.Multer.File) {
 console.log(file);
}


@Get('/getimage/:name')
 getImages(@Param('name') name:string, @Res() res) {
 res.sendFile(name,{ root: './upload' })
 }

@Post('addadmin')
@UsePipes(new ValidationPipe())
@UseInterceptors(FileInterceptor('profilepic',
{ fileFilter: (req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
   cb(null, true);
  else {
   cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
   }
  },
  limits: { fileSize: 30000 },
  storage:diskStorage({
  destination: './upload',
  filename: function (req, file, cb) {
   cb(null,Date.now()+file.originalname)
  },
  })
}
))
addAdmin(@Body() adminInfo:AdminInfo, @UploadedFile()  myfile: Express.Multer.File) {
  adminInfo.filename = myfile.filename;
return this.adminService.addAdmin(adminInfo);
}

@Put('/update/:id')
updateAdmin(@Param('id') id:number, @Body() adminInfo:AdminInfo)
{
  return this.adminService.updateAdmin(id,adminInfo);
}



}
