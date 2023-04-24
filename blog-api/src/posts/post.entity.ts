import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';

@Entity('post')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];
}
