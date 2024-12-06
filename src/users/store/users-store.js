import { User } from '../models/user';
import {loadUsersByPage} from '../use-cases/load-users-by-page';

const state = {
    currentPage: 0,
    users: [],
}

//*METODOS
const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1 )//*USERS     
    if( users.length === 0 ) return;
    
    state.users = users
    state.currentPage += 1;

}

const loadPreviusPage = async() => {
    if(state.currentPage === 1) return;//SI ES 1 NO HACER NADA
    const users = await loadUsersByPage( state.currentPage - 1)//*USERS     

    state.users = users
    state.currentPage -= 1;
    console.log(users);

}

/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = (updatedUser) => {

    let wasFound = false;

    state.users = state.users.map( user => {
        if(user.id === updatedUser.id) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    })

    if( state.users.length < 10 && !wasFound){
        state.users.push(updatedUser);
    }
}

const reloadPage = async() => {
    const users = await loadUsersByPage( state.currentPage )//*USERS     
    if( users.length === 0 ) {
        await loadPreviusPage();
        return;
    }
    state.users = users
}

export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
}