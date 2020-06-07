import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// dto
import { compareSync } from 'bcryptjs';
import { SystemUsersService } from '../system-users/system-users.service';
import { UserDto } from '../system-users/dto/user.dto';

import { Payload } from './dto/payload.dto';
import { Token } from './dto/token.dto';

// entity
@Injectable()
export class AuthService {
    constructor(
        private systemUserService: SystemUsersService,
        private jwtService : JwtService
    ){}

    async validateUser({email, password}: UserDto): Promise<any> {
        const user = await this.systemUserService.findByEmail(email);
        
        if(user && compareSync(password, user.password)){
            // eslint-disable-next-line no-shadow
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    generateToken(payload: Payload): Token {
        return {
            token : this.jwtService.sign(payload),
            refreshToken : this.jwtService.sign(payload, {expiresIn: '30d'})
        }
    }

    async login(userDto: UserDto): Promise<Token|any> {
        const user = await this.validateUser(userDto);
        console.log(user)
        if(user === null){
            throw new HttpException('Incorrect email or password',HttpStatus.INTERNAL_SERVER_ERROR)
        }
        const payload = {id : user.sysuserId, name : user.name, email : user.email}
        return this.generateToken(payload);
    }
}
