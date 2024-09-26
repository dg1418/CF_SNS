import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from './entities/posts.entity';

@Module({
  imports: [
    //forFeature는 모델에 해당하는 레포지토리를 주입할때 쓴다.
    //레포지토리는 모델을 조작하는 클래스다.
    TypeOrmModule.forFeature([PostsModel]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
