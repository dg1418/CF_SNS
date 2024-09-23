import { Injectable, NotFoundException } from '@nestjs/common';

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
  getPost() {
    return posts;
  }

  getPostById(id: number) {
    const post = posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException();
    }
    return post;
  }

  createPost(author: string, title: string, content: string) {
    const post = {
      id: posts[posts.length - 1].id + 1,
      author,
      title,
      content,
      likeCount: 0,
      commentCount: 0,
    };

    posts = [...posts, post];

    return posts;
  }

  updatePost(id: number, author: string, title: string, content: string) {
    const post = posts.find((post) => post.id === id);

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

    posts.map((prevPost) => (prevPost.id === post.id ? post : prevPost));

    return post;
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
