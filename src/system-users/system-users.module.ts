import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { AuthModule } from '../auth/auth.module';
import { SystemUsersService } from './system-users.service';
import { SystemUsersController } from './system-users.controller';
import { SystemUsersRepository } from './system-users.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            SystemUsersRepository
        ]),
    ],
    exports : [
        SystemUsersService
    ],
    providers: [SystemUsersService],
    controllers: [SystemUsersController]
})
export class SystemUsersModule {}
