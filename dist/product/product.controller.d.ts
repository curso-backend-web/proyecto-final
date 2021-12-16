import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    findAllProduct(): Promise<import("./entities/product.entity").Product[]>;
    getProductByName(name: string): Promise<import("./entities/product.entity").Product[]>;
    getLimitProduct(limit?: number, name?: string): Promise<import("./entities/product.entity").Product[]>;
    deleteProduct(id: string): Promise<any>;
    updateProduct(id: string, createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
}
