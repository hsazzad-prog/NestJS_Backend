import { Body, Controller, Get, Param, Post, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminInfo } from './admin.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): string {
    return "hello Mars";
  }

  
  @Get('index')
  getIndex(): string {
    console.log("my console");
    return "hello Index";
    
  }

@Get('/searchuserby/:id')
searchUserBy(@Param('id') userID:number): string {
return "the user id is " + userID;
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


}
