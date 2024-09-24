import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModel } from './posts/entities/posts.entity';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      // 데이터베이스 타입
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [PostModel],
      synchronize: true, //nest에서 작성하는 typeorm과 데이터베이스의 싱크를 맞출꺼냐? 묻는것
      //개발단계에서는 true로 해도 배포할때는 반드시 false해야함
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
