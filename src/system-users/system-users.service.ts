import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SystemUsers } from './system-users.entity';
import { SystemUsersRepository } from './system-users.repository';

@Injectable()
export class SystemUsersService {
    constructor(
        @InjectRepository(SystemUsersRepository)
        private readonly systemUsersRepository: SystemUsersRepository
    ){}

    findByEmail(email: string): Promise<SystemUsers>{
        return this.systemUsersRepository.findOne({
            email
        });
    }

}
