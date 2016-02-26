var cards = [
    "Card 1", 
    "Card 2",
    "Card 3"
    ];

function newcard(){
    var cardnum = Math.floor((Math.random() * cards.length) + 1);
    document.getElementById("card").innerHTML = cards[cardnum];
}

window.onkeypress = function(event) {
    newcard();
};