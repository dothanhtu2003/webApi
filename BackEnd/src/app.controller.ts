import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('tinh')
  getSume(@Query('n') n:String ) : number{
    return this.appService.tinhTong(Number(n));
  }



}

