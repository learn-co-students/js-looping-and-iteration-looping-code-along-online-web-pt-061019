// Code your solutions in this file
function writeCards(names, event) {
  const array = [];
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return array
}

function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int --;
  }

}
