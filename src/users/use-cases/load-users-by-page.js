import { localhostUserToModel } from '../mappers/localhost-user.mapper'
import { User } from '../models/user';

/**
 * 
 * @param { Number } page
 * @returns { Promise<User[]> }
 */
export const loadUsersByPage = async( page = 1 ) => {
    // http://localhost:3001/users?_page=1
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${ page }`
    const response = await fetch( url );
    const data = await response.json();

    if ( page > data.last ) return [];

    const users = data.map( localhostUserToModel );

    return users; //*DEVUELVE LOS USUARIOS
    
} 