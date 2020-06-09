const myPromise = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('I am a resolved promise'), 3000)
            : reject(new Error('I am a rejected promise'))
    })
}


const myAsyncFunction = async () => {
    try{
        const data = await myPromise();
        console.log(data)
    }catch(error){
        console.error(error)
    }
}

console.log('Before')
myAsyncFunction()
console.log('After')