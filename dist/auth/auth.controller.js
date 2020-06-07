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
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../system-users/dto/user.dto");
const system_users_service_1 = require("../system-users/system-users.service");
const auth_service_1 = require("./auth.service");
const jwt_refresh_manager_1 = require("jwt-refresh-manager");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
let AuthController = class AuthController {
    constructor(systemUsersService, authService) {
        this.systemUsersService = systemUsersService;
        this.authService = authService;
        this.JwtManager = new jwt_refresh_manager_1.JwtRefreshManager("./tmp/tokens.txt", process.env.KEY_ENCRIPTION);
    }
    async findOne(UserDto) {
        const userPayload = await this.authService.login(UserDto);
        console.log(userPayload);
        this.JwtManager.saveToken(userPayload.refreshToken);
        return userPayload;
    }
    async getTokens() {
        return this.JwtManager.getTokens();
    }
    async refreshToken(req) {
        const payload = req.user;
        const refreshToken = req.headers.authorization.replace("Bearer ", "");
        const token = this.authService.generateToken(payload);
        const tokenWasSaved = this.JwtManager.refreshToken(token.refreshToken, refreshToken);
        if (tokenWasSaved) {
            return token;
        }
        else {
            throw new common_1.HttpException('', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    common_1.Post('login'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findOne", null);
__decorate([
    common_1.Get('tokens'),
    common_1.HttpCode(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getTokens", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post('refresh/token'),
    common_1.HttpCode(200),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [system_users_service_1.SystemUsersService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map