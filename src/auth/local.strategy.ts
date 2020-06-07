import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from '../system-users/dto/user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(userDto : UserDto): Promise<any> {
        const user = await this.authService.validateUser(userDto);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
