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
    UseGuards,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { JwtAuthGuard } from '../auth/strategies/jwt-auth.guard'
import { RolesGuard } from '../auth/roles/roles.guard'
import { Roles } from '../auth/roles/roles.decorators'
import { Role } from '../auth/roles/role.enum'
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger'


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiOperation({ summary: 'Register of user' })
    @Post('register')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @ApiOperation({ summary: 'Show all users ' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard,RolesGuard)
    @Get('all')
    @Roles(Role.Admin)
    getAllUsers() {
        return this.userService.findAll()
    }

    @ApiOperation({ summary: 'Show list max of role user ' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    @Roles(Role.Admin)
    getLimitUser(@Query('limit', ParseIntPipe) limit?: number, @Query('role') role?: string) {
        return this.userService.findLimit(limit,role)
    }

    @ApiOperation({ summary: 'Show one user by name ' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get(':name')
    @Roles(Role.Admin)
    getUserByName(@Param('name') name: string) {
        return this.userService.findOne(name)
    }

    @ApiOperation({ summary: 'Delete user by userId' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    @Roles(Role.Admin)
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteById(id)
    }

    @ApiOperation({ summary: 'Update attributes of user' })
    @ApiBearerAuth('access-token')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Patch(':id')
    @Roles(Role.Admin)
    update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
        return this.userService.updateById(id, createUserDto)
    }

}