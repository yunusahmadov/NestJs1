import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';
// import { TestModule } from './test/test.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 3306,
    database: 'nest1',
    username:'root',
    password: '',
    entities: [join(__dirname + '/../**/*.entity{.ts,.js}')],
    migrations:[join(__dirname + '/../**/*.migration{.ts,.js}')],
    synchronize:true

  }), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
