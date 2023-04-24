import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async findById(id: string): Promise<PostEntity> {
    return this.postRepository.findOneBy({id:id});
  }

  async create(post: PostEntity): Promise<PostEntity> {
    return this.postRepository.save(post);
  }

  async update(id: string, post: PostEntity): Promise<PostEntity> {
    await this.postRepository.update(id, post);
    return this.postRepository.findOneBy({id:id});
  }

  async delete(id: string): Promise<void> {
    await this.postRepository.delete(id);
  }
}
