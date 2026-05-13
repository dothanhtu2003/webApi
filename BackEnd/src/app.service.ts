import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  tinhTong(cmm : number): number{
    let a = 10;
    return cmm + 10;
  }
} 