import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SystemUsers } from './system-users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SystemUsersService {
    constructor(
        @InjectRepository(SystemUsers)
        private readonly systemUsersRepository: Repository<SystemUsers>,
    ){}

    findByEmail(email: string): Promise<SystemUsers>{
        return this.systemUsersRepository.findOne({
            email : email
        });
    }

}
