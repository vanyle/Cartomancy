let game = new CardGame(playground);

function randInt(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

let template = new CardTemplate("Red Dragon","An awesome dragon !", {rotation: () => randInt(-10, 10)});
let template1 = new CardTemplate("Goat","A grass-eating goat", {rotation: () => randInt(-10, 10)});
let template2 = new CardTemplate("Goat","A hay-eating goat", {rotation: () => randInt(-10, 10)});

let id1 = game.addCardFromTemplate(template, {flippable: true, deletable: true, copiable: true});
let id2 = game.addCardFromTemplate(template1, {flippable: true, deletable: true, copiable: true});
let id3 = game.addCardFromTemplate(template2, {flippable: true, deletable: true, copiable: true});

function pick(arr){return arr[Math.floor(arr.length * Math.random())]}

let deck = new VirtualDeck("Creature Deck");
let templates = [template, template1, template2];
deck.drawCard = () => {
	return new VisibleCard(pick(templates));
};
game.addBoardElement(deck);


let trashcan = new TrashCan();
game.addBoardElement(trashcan);


let deck2 = new Deck("Monster Deck");
deck2.backgroundColor = "#3b7";
for(let i = 0;i < 6;i++){
	deck2.cardContent.push(new VisibleCard(pick(templates)))
}
deck2.updateDomElement();

game.addBoardElement(deck2);
