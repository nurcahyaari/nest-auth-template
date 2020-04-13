import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SystemUsers } from './system-users.entity';
import { SystemUsersService } from './system-users.service';
import { SystemUsersController } from './system-users.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([SystemUsers]),
        
    ],
    exports : [
        SystemUsersService
    ],
    providers: [SystemUsersService],
    controllers: [SystemUsersController]
})
export class SystemUsersModule {}
