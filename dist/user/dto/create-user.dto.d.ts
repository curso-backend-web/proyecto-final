import { LoginUserDto } from '../../auth/dto/login.dto';
declare const CreateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<LoginUserDto>>;
export declare class CreateUserDto extends CreateUserDto_base {
    readonly adress: string;
    readonly phone: string;
    readonly role: string;
}
export {};
