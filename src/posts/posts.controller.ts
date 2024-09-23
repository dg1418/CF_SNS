import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: '민지1',
    title: '민지1',
    content: '웃는민지1',
    likeCount: 10000,
    commentCount: 1000,
  },
  {
    id: 2,
    author: '민지2',
    title: '민지2',
    content: '웃는민지2',
    likeCount: 10000,
    commentCount: 1000,
  },
  {
    id: 3,
    author: '민지3',
    title: '민지3',
    content: '웃는민지3',
    likeCount: 10000,
    commentCount: 1000,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPost() {
    return this.postsService.getPost();
  }

  @Get(':id')
  getPosts(@Param('id') id: string) {
    return this.postsService.getPostById(+id);
  }

  @Post()
  postPosts(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.postsService.createPost(author, title, content);
  }

  @Patch(':id')
  putPost(
    @Param('id') id: string,
    @Body('author') author?: string,
    @Body('title') title?: string,
    @Body('content') content?: string,
  ) {
    return this.postsService.updatePost(+id, author, title, content);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePsotById(+id);
  }
}
