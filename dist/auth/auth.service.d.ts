import { SystemUsersService } from 'src/system-users/system-users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../system-users/dto/user.dto';
import { Payload } from './dto/payload.dt';
import { Token } from './dto/token.dto';
export declare class AuthService {
    private systemUserService;
    private jwtService;
    constructor(systemUserService: SystemUsersService, jwtService: JwtService);
    validateUser({ email, password }: UserDto): Promise<any>;
    generateToken(payload: Payload): Token;
    login(userDto: UserDto): Promise<Token | any>;
}
