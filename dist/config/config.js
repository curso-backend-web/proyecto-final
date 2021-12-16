"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('db', () => {
    return {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
        url: process.env.CLEARDB_DATABASE_URL,
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
    };
});
//# sourceMappingURL=config.js.map