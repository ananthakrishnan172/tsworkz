import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppleController } from './apple.controller';
import { Aapl } from './apple.entity';
import { AppleService } from './apple.service';

@Module({
    imports:[TypeOrmModule.forFeature([Aapl])],
    controllers:[AppleController],
    providers:[AppleService],
    exports:[TypeOrmModule],   
})
export class AppleModule {}
