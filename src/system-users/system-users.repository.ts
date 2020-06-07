import { Repository, EntityRepository } from "typeorm";
import { SystemUsers } from "./system-users.entity";

@EntityRepository(SystemUsers)
export class SystemUsersRepository extends Repository<SystemUsers> {

}
