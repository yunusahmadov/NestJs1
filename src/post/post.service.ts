import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import {InjectRepository} from '@nestjs/typeorm'
import { Repository} from 'typeorm';
@Injectable()
export class PostService {
    // posts:any[]
            // this.posts=[
        //     {
        //         id:1,
        //         content:'rest1'
        //     },
        //     {
        //         id:2,
        //         content:'rest2'
        //     },
        //     {
        //         id:3,
        //         content:'rest3'
        //     }
        // ]
    constructor(@InjectRepository(PostEntity) private readonly postRepository:Repository<PostEntity>){}


    async getAll(){
            return this.postRepository.find()
    }


    async create(dto:CreatePostDto){
        const post= this.postRepository.create(dto)
        return this.postRepository.save(post)
    }

    

    async getByID(id:string){
            return  this.postRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
    }

    async update( id:string,dto:CreatePostDto){
        const post= await this.getByID(id)
        post.content=dto.content
        post.userName =dto.userName
        return this.postRepository.save(post)
    }


    async delete( id:string){
        return this.postRepository.delete({id: Number(id)})
    }

}
