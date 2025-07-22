import { Controller, Get } from "@nestjs/common";
import { User } from "src/Entities/user.entity";
import { UserService } from "src/services/user.service";

@Controller('user')
export class UserController {
    
    constructor( private readonly userService: UserService) {}

    @Get()
    findAll():Promise<User[]>{
        return this.userService.findAllUSer();
    }
    
}