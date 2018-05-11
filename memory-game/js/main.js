
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
//console.log("You found a match!");
alert("You Found A Match!");
 } else {
 //console.log("Sorry, try again.");
alert("Sorry! Try Again");
 }
 };

var flipCard = function (cardId) {

if (cardsInPlay.length === 2) {

	if (cards[0] === cards[1]) {
		alert("You Found A Match");}
	else { alert("Sorry, Try Again!");}
}
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
};

flipCard(0);
flipCard(2);







