let player={
    name: "Per",
    chips: 200
}

let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let cards=[]
let sum=0
let isAlive=false
let hasBlackJack=false
let message=" "

function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13+1)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<21){
        isAlive=true
        hasBlackJack=false
        message="Do you want to draw another card?"
    }
    else if( sum===21){
        isAlive=false
        hasBlackJack=true
        message="You got a Blackjack!"
    }
    else{
        isAlive=false
        hasBlackJack=false
        message="You Lost!"
    }
    messageEl.textContent=message
}

function newCard(){
    if(isAlive === true && hasBlackJack===false){
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}