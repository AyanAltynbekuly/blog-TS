import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PostEntity } from '../posts/post.entity';

@Entity('comment')
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  body: string;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  post: PostEntity;
}
