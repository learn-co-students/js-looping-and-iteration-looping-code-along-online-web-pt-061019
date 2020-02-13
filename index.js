function writeCards(name, condition) {
    let i = 0;
    let names = [];
    while(i < name.length){
        names.push(`Thank you, ${name[i]}, for the wonderful ${condition} gift!`)
        i++;
    }
    return names;
}

function countDown(num){
    for (let i = num; i >= 0; i--){
      console.log(i);
    }
}