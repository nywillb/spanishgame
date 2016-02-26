var cards = [
    "Card 1", 
    "Card 2",
    "Card 3"
    ];

var cardnum = Math.floor(Math.random() * cards.length -1);

var score = 0

function startgame(){
    score = 0
}

function newcard(){
    cardnum = Math.floor(Math.random() * cards.length);
    document.getElementById("card").innerHTML = cards[cardnum];
}

window.onkeypress = function(event) {
    if(event.keyCode != 83){
        newcard();
    } else if(event.keyCode === 83) {
        document.getElementById("card").innerHTML = '<i class="fa fa-frown-o"></i>Pasar...'
    }
};