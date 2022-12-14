import {ROUTES} from '../MOCK/routes'

class RouteService {



    getAllRoutes(){
        return Promise.resolve({data: ROUTES})
    }

}

export const routeService = new RouteService()