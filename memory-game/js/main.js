
var cards = [
{
	rank: "queen",
	suit: "heart",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "heart",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


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
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
checkForMatch();
console.log("User flipped " + cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].suit);
};

flipCard(0);
flipCard(2);









