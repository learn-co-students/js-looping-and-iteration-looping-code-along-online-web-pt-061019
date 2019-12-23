// Code your solutions in this file
function writeCards(names, event) {
    let new_array = [];
    for (let i = 0; i < names.length; i++) {
      new_array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 
    }
    return new_array;
  }

  function countDown(num) {
    while ( num >= 0 ){
        console.log(num); num--;
    }
}