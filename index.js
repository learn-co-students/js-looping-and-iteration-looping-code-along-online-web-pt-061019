/*
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  let i = 0; 
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }
 
  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(array, event) {
    let new_array = []
    for (let i=0; i <array.length; i++) {
        new_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return new_array
}

function countDown(numbers) {
    while (numbers >=0) {
        console.log(numbers--)
    }
}

countDown(10)