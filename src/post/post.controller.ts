import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService:PostService) {}
    


    @Get()
    async getAll(){
            return this.postService.getAll()
    }

    @Post()
    async create(@Body() dto:CreatePostDto){
        return this.postService.create(dto)
    }

    
    @Get(":id")
    async getByID(@Param('id') id:string){
           this.postService.getByID(id)
    }

    @Put(":id")
    async update(@Param('id') id:string,@Body() dto:CreatePostDto){
        return this.postService.update(id,dto)
    }

    @Delete(":id")
    async delete(@Param('id') id:string){
       this.postService.delete(id)
    }
}
