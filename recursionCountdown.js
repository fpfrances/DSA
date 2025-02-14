function countDown(number) {
    if(number === 0){
        console.log("Stopping point was reached!")
        return
    }
    console.log(number)
    countDown(number - 1)
}

countDown(10)