const XMLHttpRequest  = require('xmlhttprequest').XMLHttpRequest
const API_URL = 'https://rickandmortyapi.com/api/character/'

const fetchData = (apiUrl, callback) => {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', apiUrl, true);
    xmlHttp.onreadystatechange = (event) => {
        if(xmlHttp.readyState === 4){
            if(xmlHttp.status === 200){
                //transformo la respuesta a JSON
                callback(null, JSON.parse(xmlHttp.responseText))
            }else{
                const error = new Error(`Error ${apiUrl}`)
                return callback(error, null)
            }
        }
    }
    xmlHttp.send()
}

fetchData(API_URL, (error1, data1) => {
    if(error1) return console.error('error1', error1)
    fetchData(`${API_URL}${data1.results[0].id}`, (error2, data2) => {
        if(error2) return console.error('error2', error2)
        fetchData(data2.origin.url, (error3, data3) => {
            if(error3) return console.error('error3',error3)
            console.log('Number of characters', data1.info.count)
            console.log('Name of the character', data2.name)
            console.log('Dimension', data3.dimension)
        })
    })
})