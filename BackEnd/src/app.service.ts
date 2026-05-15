import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  tinhTong(cmm : number): number{
    let a : number = 10;
    return cmm + 10 ;
  }

  getPrintSum() {
    console.log("may nhin cai choa gi"+ this.tinhTong(10));
  }
} 