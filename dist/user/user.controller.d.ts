import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    getAllUsers(): Promise<import("./entities/user.entity").User[]>;
    getLimitUser(limit?: number, role?: string): Promise<import("./entities/user.entity").User[]>;
    getUserByName(name: string): Promise<import("./entities/user.entity").User>;
    deleteUser(id: string): Promise<any>;
    update(id: string, createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
}
