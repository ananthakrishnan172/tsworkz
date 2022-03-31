import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Aapl } from './apple/apple.entity';
import { AppleModule } from './apple/apple.module';

@Module({
  imports: [AppleModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'tsworkz',
    entities: [Aapl],
    synchronize: false,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
