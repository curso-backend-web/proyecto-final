import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(nameDto: string): Promise<User>;
    findAll(): Promise<User[]>;
    findLimit(limit: number, role: string): Promise<User[]>;
    deleteById(id: string): Promise<any>;
    updateById(id: string, createUserDto: CreateUserDto): Promise<User>;
}
