import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../auth/dto/login.dto';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(name: string, pass?: string): Promise<any>;
    login(user: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
