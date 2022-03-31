import { Controller, Get, Param } from '@nestjs/common';
import { AppleService } from './apple.service';

@Controller('apple')
export class AppleController  {
    constructor(private appleService:AppleService){}

    @Get('getdata/:date')
    getData(@Param('date') date:string):any{
        return this.appleService.getAppleData(date);        
    }
}