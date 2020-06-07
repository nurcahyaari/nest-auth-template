import { SystemUsers } from './system-users.entity';
import { Repository } from 'typeorm';
export declare class SystemUsersService {
    private readonly systemUsersRepository;
    constructor(systemUsersRepository: Repository<SystemUsers>);
    findByEmail(email: string): Promise<SystemUsers>;
}
