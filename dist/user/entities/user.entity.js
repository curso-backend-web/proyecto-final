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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const encryptation_helper_1 = require("../../common/utils/encryptation.helper");
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let User = class User {
    async hashPassword() {
        this.password = await encryptation_helper_1.Encryptation.encryptPassword(this.password);
    }
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: "194789f3-dbd2-4fa2-853b-4eaf39c5345e" }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Pepe Lopez" }),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ahasdfllllhdlhlalfa.ldsaflas.ladfh" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Calle Balmes 22, 2-1" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "adress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "+34 887574883" }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "cliente" }),
    (0, typeorm_1.Column)({ default: "cliente" }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "hashPassword", null);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map