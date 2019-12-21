// Code your solutions in this file

function writeCards(array, event) {
  let new_array = []
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    new_array.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
  return new_array
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}
