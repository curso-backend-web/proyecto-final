"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(createProductDto) {
        let nameDto = createProductDto.name;
        if ((!nameDto)) {
            throw new common_1.BadRequestException('No possible register, product datas error');
        }
        else {
            const product = new product_entity_1.Product();
            Object.assign(product, createProductDto);
            return await this.productRepository.save(product);
        }
    }
    async findAllProduct() {
        return await this.productRepository.find();
    }
    async findProduct(nameDto) {
        const product = await this.productRepository.findOne({ name: nameDto });
        if (!product) {
            throw new common_1.NotFoundException({ statusCode: 400, message: `Product ${nameDto} not exist in database` });
        }
        else {
            const result = (await this.productRepository.find({ name: nameDto })).slice(0);
            return result;
        }
    }
    async findLimitProduct(limit, name) {
        const check = await this.productRepository.findOne({ name: name });
        if (!check) {
            throw new common_1.NotFoundException({ statusCode: 404, message: `Product no exist` });
        }
        if ((limit <= 0)) {
            throw new common_1.NotFoundException({ statusCode: 404, message: `Parameters no corrects` });
        }
        else {
            const result = (await this.productRepository.find({ name })).slice(0, limit);
            return result;
        }
    }
    async deleteByIdProduct(id) {
        const product = await this.productRepository.findOne({ productId: id });
        if (!product) {
            throw new common_1.NotFoundException({ statusCode: 400, message: `Product to delete ${id} not exist in database` });
        }
        await this.productRepository.delete(product);
        return product;
    }
    async updateByIdProduct(id, createProductDto) {
        const product = await this.productRepository.findOne({ productId: id });
        if ((!product) || (!product.productId)) {
            throw new common_1.NotFoundException({ statusCode: 400, message: `Product update ${id} not exist in database` });
        }
        else {
            Object.assign(product, createProductDto);
            await this.productRepository.save(product);
            return product;
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map