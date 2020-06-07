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
const typeorm_1 = require("typeorm");
let SystemUsers = class SystemUsers {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: "sysuser_id" }),
    __metadata("design:type", Number)
], SystemUsers.prototype, "sysuserId", void 0);
__decorate([
    typeorm_1.Column({ length: 50 }),
    __metadata("design:type", String)
], SystemUsers.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ length: 100 }),
    __metadata("design:type", String)
], SystemUsers.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ length: 255 }),
    __metadata("design:type", String)
], SystemUsers.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: "created_at" }),
    __metadata("design:type", Number)
], SystemUsers.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ nullable: true, name: "updated_at" }),
    __metadata("design:type", Number)
], SystemUsers.prototype, "updatedAt", void 0);
SystemUsers = __decorate([
    typeorm_1.Entity()
], SystemUsers);
exports.SystemUsers = SystemUsers;
//# sourceMappingURL=system-users.entity.js.map