import {Database} from './Database.js'

export class UserService{
    constructor(){
        this.database = Database.getInstance()
    };

    creatUser(body){
       return this.database.create('users', body)
    };

    getUsers(){
        return this.database.read('users')
    };

    deleteUsers(id){
        return this.database.delete('users', id)
    }
    updateUsers(body,id){
        return this.database.update('users',body,id)
    }

}

export const userService = new UserService();