import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/Entities/user.entity";

export class UserService {
    
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    findAllUSer():Promise<User[]>{
        return this.userRepository.find();
    }

}