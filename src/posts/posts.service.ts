import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsModel } from './entities/posts.entity';

export interface PostModel {
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

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsModel)
    private readonly postsRepository: Repository<PostsModel>,
  ) {}

  async getAllPosts() {
    return this.postsRepository.find();
  }

  async getPostById(id: number) {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  async createPost(author: string, title: string, content: string) {
    const post = await this.postsRepository.create({
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    });

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async updatePost(id: number, author: string, title: string, content: string) {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      throw new NotFoundException();
    }

    if (author) {
      post.author = author;
    }

    if (title) {
      post.title = title;
    }

    if (content) {
      post.content = content;
    }

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  deletePsotById(id: number) {
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException();
    }

    posts = posts.filter((post) => post.id !== id);

    return id;
  }
}
