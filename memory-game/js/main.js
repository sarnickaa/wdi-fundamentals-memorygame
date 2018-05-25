
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



var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

if (cardsInPlay.length === 2) {

	//if (cards[0] === cards[1]) {
		//alert("You Found A Match");}
	//else { alert("Sorry, Try Again!");}
//}
//console.log("User flipped " + cards[cardId].rank);

checkForMatch();}
//console.log("User flipped " + cards[cardId].cardImage);
//console.log("User flipped " + cards[cardId].suit);
};

var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
//console.log("You found a match!");
alert("You Found A Match!");
 } else {
 //console.log("Sorry, try again.");
alert("Sorry! Try Again");
 }
 };

var createBoard = function () {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', [i]);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

var button = document.getElementById('refresh');

function refreshPage () {
	location.reload();
};	
button.addEventListener('click', refreshPage);



var scoreButton = document.getElementById('score');

function usersScore () {
var userInput = document.getElementById('winorlose').value;
//var result = userInput.value;

var newListItem = document.createElement('li');
newListItem.innerHTML = userInput;

document.getElementById('scorelist').appendChild(newListItem);
};

scoreButton.addEventListener('click', usersScore);












