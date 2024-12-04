import {loadUsersByPage} from '../use-cases/load-users-by-page';

const state = {
    currentPage: 0,
    users: [],
}

//*METODOS
const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1 )//*USERS     

    state.currentPage += 1;
    state.users = users
    
}

const loadPreviusPage = async() => {
    throw new Error('No implementado')
}

const onUserChanged = () => {
    throw new Error('No implementado')
}

const reloadPage = async() => {
    throw new Error('No implementado')
}

export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrenPage: () => state.currentPage,
}