// Code your solutions in this file
function writeCards(array, event) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}
writeCards(array, event)

function countDown(int) {
    while (int >= 0) {
        console.log(int--)
    }
}
    countDown(15)
