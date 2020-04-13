import { Injectable, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { SystemUsersService } from 'src/system-users/system-users.service';
import { JwtService } from '@nestjs/jwt';

// dto
import {UserDto} from '../system-users/dto/user.dto';

import { compare, compareSync } from 'bcryptjs';
import { isObject } from 'util';
import { Payload } from './dto/payload.dt';
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
            const {password, ...result} = user;
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

    async login(userDto: UserDto): Promise<any> {
        const user = await this.validateUser(userDto);
        console.log(user)
        if(user != undefined){
            const payload = {id : user.sysuserId, name : user.name, email : user.email}
            this.generateToken(payload);
        }
        else {
            throw new HttpException('Incorrect email or password',HttpStatus.INTERNAL_SERVER_ERROR)
        };
    }
}
