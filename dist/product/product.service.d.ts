import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    findAllProduct(): Promise<Product[]>;
    findProduct(nameDto: string): Promise<Product[]>;
    findLimitProduct(limit: number, name: string): Promise<Product[]>;
    deleteByIdProduct(id: string): Promise<any>;
    updateByIdProduct(id: string, createProductDto: Partial<CreateProductDto>): Promise<Product>;
}
