import {Database} from './Database.js'

export class RoutesService{
    constructor(){
        this.database = Database.getInstance()
    };

    creatRoute(body){
       return this.database.create('routes', body)
    };

    getRoutes(){
        return this.database.read('routes')
    };

    deleteRoutes(id){
        return this.database.delete('routes', id)
    }
    updateRoute(body,id){
        return this.database.update('routes',body,id)
    }

    getRoute(id){
        return this.database.getDocument('routes', id)
    }

}

export const routesService = new RoutesService();