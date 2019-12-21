// Code your solutions in this file

function writeCards(names, event) {
    let tycards = [];
    for (let i = 0; i < names.length; i++) {
        tycards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 
    }
    return tycards;
}

function countDown(num) {
    while ( num >= 0 ){
        console.log(num); num--;
    }
}