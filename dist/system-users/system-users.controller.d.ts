import { SystemUsersService } from './system-users.service';
export declare class SystemUsersController {
    private systemUserService;
    constructor(systemUserService: SystemUsersService);
    getUserProfile(req: any): Promise<any>;
}
