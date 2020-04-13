import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

// other modules
import { SystemUsersModule } from '../system-users/system-users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports : [
    SystemUsersModule, 
    PassportModule,
    JwtModule.register({
      secret : "Test",
      signOptions: {expiresIn: '8m'}
    })
  ],
  exports : [JwtStrategy],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
