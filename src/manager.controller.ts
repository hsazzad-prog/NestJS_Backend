import { Controller, Get } from '@nestjs/common';

@Controller('manager')
export class ManagerController {

  @Get()
  getHello(): string {
    return "hello Managers";
  }
  @Get('index')
  getIndex(): string {
    console.log("my console");
    return "hello Manager Index";
    
  }

}
