const sum = (num1, num2) => {
    return num1+num2;
}

const calculate = (num1, num2, callback) => {
    return callback(num1, num2)
}

console.log(calculate(2,2,sum))

const date = (callback) => {
    console.log(new Date());
    //esperar n tiempo para hacer un llamado
    setTimeout(() => {
        const date = new Date()
        callback(date)
    }, 3000) //3seg
}

const printDate = (currentDate) => {
    console.log('currentDate', currentDate)
}

date(printDate);