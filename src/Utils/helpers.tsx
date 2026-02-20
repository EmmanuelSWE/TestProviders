export const getUser =() : string =>{

    const userName = sessionStorage.getItem('user');

    return userName ?? 'User';
    
}