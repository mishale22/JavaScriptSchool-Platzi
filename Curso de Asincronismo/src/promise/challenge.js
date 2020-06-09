const fetchData = require('../utils/fetchData')

const API_URL = 'https://rickandmortyapi.com/api/character/'

fetchData(API_URL)
    .then(data => {
        console.log('Number of characters', data.info.count)
        return fetchData(`${API_URL}${data.results[0].id}`)
    })
    .then(data => {
        console.log('Name of the character', data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log('Dimension', data.dimension)
    })
    .catch(error => {
        console.error(error)
    })