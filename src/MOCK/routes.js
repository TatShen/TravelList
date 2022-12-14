const generateRotes = (qty) => {
    return new Array(qty)
    .fill(null)
    .map((_,index)=>({
        id : 1,
        title:'Маршрут',
        reating: Math.ceil(Math.random(index) * 5),
       
        comments: [
            {
                title : 'Comment 1',
                comment: 'lorem'
            }
        ],
    }))
}


export const ROUTES = generateRotes(4)