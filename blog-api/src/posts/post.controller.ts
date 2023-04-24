import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.findById(id);
  }

  @Post()
  async create(@Body() post: PostEntity): Promise<PostEntity> {
    return this.postService.create(post);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() post: PostEntity): Promise<PostEntity> {
    return this.postService.update(id, post);
  }

  @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
    return this.postService.delete(id);
    }
    }
