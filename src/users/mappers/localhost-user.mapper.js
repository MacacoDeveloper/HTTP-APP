import { User } from "../models/user"


/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {

    const { 
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,
    } = localhostUser;
    
    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
}