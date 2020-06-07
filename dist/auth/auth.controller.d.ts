import { UserDto } from '../system-users/dto/user.dto';
import { SystemUsersService } from '../system-users/system-users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly systemUsersService;
    private authService;
    private JwtManager;
    constructor(systemUsersService: SystemUsersService, authService: AuthService);
    findOne(UserDto: UserDto): Promise<{}>;
    getTokens(): Promise<any>;
    refreshToken(req: any): Promise<{}>;
}
