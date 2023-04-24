import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(): Promise<CommentEntity[]> {
    return this.commentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CommentEntity> {
    return this.commentService.findOne(id);
  }

  @Post(':postId')
  async create(
    @Param('postId') postId: string,
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('body') body: string,
  ): Promise<CommentEntity> {
    return this.commentService.create(name, email, body, postId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.commentService.delete(id);
  }
}
