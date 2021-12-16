import {
    Controller,
    Get,
    Post,
    Body,
    Query,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
    UseGuards
} from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard'
import { RolesGuard } from '../auth/roles/roles.guard'
import { Roles } from '../auth/roles/roles.decorators'
import { Role } from '../auth/roles/role.enum'
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger'

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @ApiOperation({ summary: 'Register of product' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Post('registerproduct')
    @Roles(Role.Admin)
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.createProduct(createProductDto)
    }

    @ApiOperation({ summary: 'Show all products ' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Get('all')
    @Roles(Role.Admin)
    findAllProduct() {
        return this.productService.findAllProduct()
    }

    @ApiOperation({ summary: 'Show one product by name ' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Get(':name')
    @Roles(Role.Admin, Role.User)
    getProductByName(@Query('name') name: string) {
        return this.productService.findProduct(name)
    }

    @ApiOperation({ summary: 'Show list max of products by name' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Get()
    @Roles(Role.Admin, Role.User)
    getLimitProduct(@Query('limit', ParseIntPipe) limit?: number, @Query('name') name?: string) {
        return this.productService.findLimitProduct(limit, name)
    }

    @ApiOperation({ summary: 'Delete product by productId' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Delete(':id')
    @Roles(Role.Admin)
    deleteProduct(@Param('id') id: string) {
        return this.productService.deleteByIdProduct(id)
    }

    @ApiOperation({ summary: 'Update attributes of product' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Patch(':id')
    @Roles(Role.Admin)
    updateProduct(@Param('id') id: string, @Body() createProductDto: CreateProductDto) {
        return this.productService.updateByIdProduct(id, createProductDto)
    }

}
