import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { PostEntity } from '../posts/post.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>,
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async findAll(): Promise<CommentEntity[]> {
    return await this.commentRepository.find();
  }

  async findOne(id: string): Promise<CommentEntity> {
    return await this.commentRepository.findOneBy({id:id});
  }

  async create(name: string, email: string, body: string, postId: string): Promise<CommentEntity> {
    const post = await this.postRepository.findOneBy({ id: postId });
    const newComment = await this.commentRepository.create({ name, email, body, post });
    return await this.commentRepository.save(newComment);
  }

  async delete(id: string): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
