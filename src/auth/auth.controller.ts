import { Controller, Get, Post, Body, HttpCode, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';

// DTO
import { JwtRefreshManager } from 'jwt-refresh-manager';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserDto } from '../system-users/dto/user.dto';

// import services
import { SystemUsersService } from '../system-users/system-users.service';
import { AuthService } from './auth.service';
// import { LocalAuthGuard } from './local-auth.guard';
import { Token } from './dto/token.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Payload } from './dto/payload.dto';

@Controller('auth')
export class AuthController {
    private JwtManager:any;

    constructor(
        private readonly systemUsersService: SystemUsersService,
        private authService: AuthService,
    ){
        this.JwtManager = new JwtRefreshManager("./tmp/tokens.txt", process.env.KEY_ENCRIPTION)
    }

    @Post('login')
    // @UseGuards(LocalAuthGuard)
    @HttpCode(200)
    // eslint-disable-next-line no-shadow
    async findOne(@Body() UserDto: UserDto):Promise<{}>{
        const userPayload: Token =  await this.authService.login(UserDto);
        this.JwtManager.saveToken(userPayload.refreshToken);
        return userPayload;
    }

    @Get('tokens')
    @HttpCode(200)
    async getTokens(){
        return this.JwtManager.getTokens();
    }

    @UseGuards(JwtAuthGuard)
    @Post('refresh/token')
    @HttpCode(200)
    async refreshToken(@Request() req):Promise<{}>{
        const payload: Payload = req.user;
        const refreshToken = req.headers.authorization.replace("Bearer ", "");
        const token: Token = this.authService.generateToken(payload);
        const tokenWasSaved = this.JwtManager.refreshToken(token.refreshToken, refreshToken);

        if(tokenWasSaved){
            return token;
        } 
        throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR);
        
    }
}
