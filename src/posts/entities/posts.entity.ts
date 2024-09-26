import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

//엔티티 데코레이터 사용시 클래스를 보고 테이블이 만들어짐
@Entity()
export class PostsModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likeCount: number;

  @Column()
  commentCount: number;
}
