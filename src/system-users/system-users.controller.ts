import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { SystemUsersService } from './system-users.service';

import {JwtAuthGuard} from '../auth/jwt-auth.guard';

@Controller('system/users')
export class SystemUsersController {
    constructor(
        private systemUserService: SystemUsersService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getUserProfile(@Request() req): Promise<any> {
        return req.user;
    }
}
