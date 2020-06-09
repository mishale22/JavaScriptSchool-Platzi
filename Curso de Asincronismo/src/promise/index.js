const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true)
            resolve('Hey! We did it')
        else
            reject('Oppps. We could not make it')
    })
}

somethingWillHappen()
.then(result => {
    console.log(result)
}).catch(error => console.error(error))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(()=>{
                resolve('Timing out')
            }, 2000) //2segundos
        }else{
            reject(new Error('Something bad happened'))
        }
    })
}

somethingWillHappen2()
    .then( result => console.log(result))
    .catch(error => console.error(error)) 

//correr varias promesas al mismo tiempo y retornar un arreglo con los resultados
Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {console.log('Array', response)})
.catch(error => console.error(error))