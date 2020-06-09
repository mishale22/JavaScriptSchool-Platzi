const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (apiUrl) => {
    return new Promise((resolve, reject) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', apiUrl, true);
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState === 4) {
                (xmlHttp.status === 200)
                ? resolve(JSON.parse(xmlHttp.responseText))
                : reject(new Error(`Error ${apiUrl}`))
    
            }
        }
        xmlHttp.send()
    })
}

module.exports = fetchData;
