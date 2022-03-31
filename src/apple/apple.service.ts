import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Aapl } from "./apple.entity";

@Injectable()
export class AppleService{
    constructor (
        @InjectRepository(Aapl) 
        private aaplRepository:Repository<Aapl>,        
    ){}


    getAppleData(date:string):Promise<Aapl>{
        return this.aaplRepository.findOne(date);
    }
}