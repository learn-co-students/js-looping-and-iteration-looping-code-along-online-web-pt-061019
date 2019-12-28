// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"], eventName = "birthday";

function writeCards(names, eventName) {
   for (let i = 0; i < names.length; i++) {
      console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
   }
}

function countDown(number) {
   let i = number;
   while(i > 0) {
      console.log(i--);
   }
}