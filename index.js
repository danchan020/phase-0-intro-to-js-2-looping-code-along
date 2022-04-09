function writeCards(cards,event){
    let arr = [];
    for (let i=0; i < cards.length; i++){
        arr.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
}
return arr}


function countDown(timer){
    while(timer >= 0){
        console.log(timer--);
    }}