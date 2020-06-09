const fetchData = require('../utils/fetchData')

const API_URL = 'https://rickandmortyapi.com/api/character/'

const myAsyncFunction = async () => {

    try{
        let data = await fetchData(API_URL);
        console.log('Number of characters', data.info.count)
        data = await fetchData(`${API_URL}${data.results[0].id}`)
        console.log('Name of the character', data.name)
        data = await fetchData(data.origin.url)
        console.log('Dimension', data.dimension)
    }catch(error){
        console.error(error)
    }
}

myAsyncFunction()