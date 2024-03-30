let game = new CardGame(playground);

// Locations
let locationTemplates = [
	new CardTemplate("Branching Forest","A maze-like forest"),
	new CardTemplate("Recursive City","A megalopolis filled with robots and dark alleys"),
	new CardTemplate("Tropical Resort","A calm-looking seaside city with sandy beaches"),
	new CardTemplate("Tedrahedral Desert","A sun-burnt desert with Pyramids and Tombs to explore"),
	new CardTemplate("Venomous jungle","A dense jungle populated by dangerous animals and temples"),
	new CardTemplate("Frozen cliffs","A bleak plain swept by icy winds and snowy caves"),
	new CardTemplate("Cursed ruins","The remains of a once great civilisation.")
];
let locations = locationTemplates.map((t) => new VisibleCard(t));

let locationDeck = new Deck("Locations");
locationDeck.cardContent = locations;
locationDeck.x = 70; locationDeck.y = 30;
locationDeck.updateDomElement();
locationDeck.shuffle();
game.addBoardElement(locationDeck);


// Things that mesure integers
let healthTemplate = new CardTemplate("1 HP","Represent a unit of life");
let healthBank = new VirtualDeck("Health Bank");
healthBank.backgroundColor = "#f00";
healthBank.x = 120; healthBank.y = 30;
healthBank.drawCard = () => {return new VisibleCard(healthTemplate, {deletable: true})}
healthBank.updateDomElement();
game.addBoardElement(healthBank);


let coinTemplate = new CardTemplate("1 Gold","Represent a unit of currency");
let coinBank = new VirtualDeck("Gold Bank");
coinBank.backgroundColor = "#fd1";
coinBank.x = 150; coinBank.y = 30;
coinBank.drawCard = () => {return new VisibleCard(coinTemplate, {deletable: true})};
coinBank.updateDomElement();
game.addBoardElement(coinBank);

let manaTemplate = new CardTemplate("1 Mana","Represent a unit of magic");
let manaBank = new VirtualDeck("Mana Bank");
manaBank.backgroundColor = "#55f";
manaBank.x = 180; manaBank.y = 30;
manaBank.drawCard = () => {return new VisibleCard(manaTemplate, {deletable: true})};
manaBank.updateDomElement();
game.addBoardElement(manaBank);

// Trash
let trashcan = new TrashCan();
trashcan.x = innerWidth - 160;
trashcan.y = 10;
trashcan.updateDomElement();
game.addBoardElement(trashcan);

// Encounters
let encounters = [ // found in all locations
	new CardTemplate("Friendly merchant","Encounter: Draw 3 cards from the equipment deck. You can buy them. You can sell 1 equipment card."),

	// ordered by how good the event is
	new CardTemplate("A hidden bag","Encounter: Draw 1 small loot from the location loot deck"),
	new CardTemplate("A camouflaged box","Encounter: Draw 2 small loot from the location loot deck"),
	new CardTemplate("A buried treasure","Encounter: Draw 1 medium loot from the location loot deck"),
	new CardTemplate("A clandestine cache","Encounter: Draw 1 small loot and 1 medium from the location loot deck"),
	new CardTemplate("A lost artefact","Encounter: Draw 1 big loot from the location loot deck"),

	// order by how bad the hazard is
	new CardTemplate("Robbery","Encounter: Lose 2 gold"),
	new CardTemplate("Insect Bite","Encounter: Lose 2 mana"),
	new CardTemplate("Rotten ingredients","Encounter: Choose an potion. It turns bad. Discard it"),
	new CardTemplate("Disease","Encounter: Lose 2 health"),
	new CardTemplate("Passage of Time","Encounter: Choose an equipment. It breaks due to time"),

	// ordered by difficulty (location specific is harder than generic enemy)
	new CardTemplate("A small foe","Encounter: Draw 1 card from the small generic enemy deck and battle!"),
	new CardTemplate("A medium outsider","Encounter: Draw 1 medium card from the generic enemy deck and battle!"),
	new CardTemplate("A medium foe","Encounter: Draw 1 medium card from the location enemy deck and battle!"),
	new CardTemplate("Brawl","Encounter: Draw 2 small cards from the generic enemy deck and 1 from the small location enemy deck and battle!"),
	new CardTemplate("An evil party","Encounter: Draw 1 medium card from the generic enemy deck and 1 small card from the location enemy deck and battle!"),
	new CardTemplate("An evil gathering","Encounter: Draw 1 medium card from the location enemy deck and 1 small card from the generic enemy deck and battle!"),
	new CardTemplate("Boss","Encounter: Draw the boss card from the location deck and battle!"),
];

// small ennemy = lvl 1
// medium enemy = lvl 2
// boss = lvl 3

let ennemies = [
	new CardTemplate(
		"Bandit",
		"Pick ply w/ the highest GOLD. Steal 2 gold from him. If he has less than 2 GOLD, Attack him. LOOT: 3 gold",
		{hp:3,lvl:1,atk:1, loc:"generic"}),
	new CardTemplate(
		"Boar",
		"Pick ply w/ the highest HP. Attack him. LOOT: Health potion",
		{hp:3,lvl:1,atk:2, loc:"generic"}),
	new CardTemplate(
		"Scorpion",
		"Pick ply w/ the highest Mana. Attack him and remove 1 mana from him. LOOT: Mana potion",
		{hp:3,lvl:1,atk:2, loc:"generic"}),


	new CardTemplate(
		"Cultist",
		"Pick ply w/ the lowest HP. Attack him. LOOT: medium loot",
		{hp:5,lvl:2,atk:3, loc:"generic"}),
	new CardTemplate(
		"Yaldabaoth",
		"Pick ply w/ the highest Mana. Attack him and remove 2 mana from him. LOOT: none",
		{hp:25,lvl:3,atk:4, loc:"generic"}),
	new CardTemplate(
		"Acid worm",
		"Destroy a piece of equipment of a random ply. Attack ply in order. LOOT: medium loot",
		{hp:5,lvl:2,atk:3, loc:"generic"}),

];
let loot = [ // contains: gold, equipment and consumables

]

let equipment = [

]
let consumables = [

]