

async function getData(){
    const endpoint='https://jsonplaceholder.typicode.com/todos'
    try{
        const res = await axios({
            method: 'get',
            url: endpoint
           });
        return res
    }
    catch(err){

    }
}


