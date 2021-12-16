export declare class User {
    userId: string;
    name: string;
    password: string;
    adress: string;
    phone: string;
    role: string;
    hashPassword(): Promise<void>;
}
