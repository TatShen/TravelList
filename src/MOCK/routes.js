const generateRotes = (qty) => {
    return new Array(qty)
    .fill(null)
    .map((_,index)=>({
        id : 1,
        title:'Маршрут',
        reating: Math.ceil(Math.random(index) * 5),
        map: '',
        photo:[],
        description:'werrdgdsghdfjdfkk  gjbflgjbhf  gfj gf',
        info:'5 houre',
        userName:'TatShen',
        avatar:''
        
    }))
}


export const ROUTES = generateRotes(4)