
// To generate documentation for this file, install jsdoc and run it:
// npm install -g jsdoc
// jsdoc cartomancy.js

/** 
 * @file Cartomancy.js is a javascript frontend library for designing card games and card games prototypes.
 * 
 * @version 0.1
 * @author vanyle
 * @copyright 2022
 * 
 */

let objects = {}; // table containing mappings from object ids to objects.

const cardWidth = 120;
const cardHeight = Math.floor(120 * Math.sqrt(2));


const backImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAACUCAYAAABLNa3fAAAGdGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTEyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTQ4IgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHRpZmY6SW1hZ2VMZW5ndGg9IjE0OCIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMTIiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249Ijk2LjAiCiAgIHRpZmY6WVJlc29sdXRpb249Ijk2LjAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIw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)";

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
	(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

/**
 * Represents a card type 
*/
class CardTemplate{
	/**
	* Create a new Card Template
	* @param {string} name - The name of the card.
	* @param {string} description - A description of the card.
	* @peram {object} metadata - Added options, like the default rotation of the card
	*/
	constructor(name, description, metadata){
		this.name = name;
		this.description = description;
		this.metadata = metadata || {};
	}
}

let blankTemplate = new CardTemplate("","");


/**
 * Represents an element displayed on the board 
*/ 
class VisibleBoardElement{
	/** Background color of the card
	 * @type {string}*/
	backgroundColor = "#eee";
	/** Text color of the card
	 * @type {string}*/
	color = "black";
	/** Border of the card
	 * @type {string}*/
	border = "7px solid #c89752";

	backgroundImage = backImage;

	/** Shadow of the card
	 * @type {string}*/
	boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";

	rotation = 0;
	scale = 1;

	/** X position of the card on the board 
	 * @type {number} */
	x = 0;
	/** Y position of the card on the board 
	 * @type {number}*/
	y = 0;

	/** DomElement associated with the card 
	 * @type {HTMLElement}*/
	domElement = null;

	/** Called when the card is copied
	 * @event */
	onCopy = () => {};
	
	/** Called when the card is deleted
	 * @event */
	onDelete = () => {};

	/** Called when the card is moved
	 * @event */
	onMoved = () => {};

	movable = true;

	lockx = 0; // Used internally for lockInPlace
	locky = 0;

	/** If the BoardElement belows to a board, this is a reference to said board.
	 * @type {CardGame} */
	gameBoard = null;

	/**
	 *  Prevents a card from moving but add a cool snap animation when trying to move it.
	 *  @type {boolean}
	 */
	lockInPlace = false; 

	/** uuid of object, meant for access with the "objects" hashtable
	 * @readonly
	 * @type {string} */
	uuid = uuidv4();

	constructor(options){
		options = options || {};
		this.domElement = document.createElement("div");
		this.domElement.className = "board-element-cartomancy";
		this.domElement.setAttribute("data-uuid", this.uuid);
		objects[this.uuid] = this;
	}

	updateCSSProperties(){
		this.domElement.style.top = this.y + "px";
		this.domElement.style.left = this.x + "px";
		this.domElement.style.color = this.color;
		this.domElement.style.border = this.border;
		this.domElement.style.borderRadius = "10px";
		this.domElement.style.boxShadow = this.boxShadow;
		this.domElement.style.transform = `rotate(${this.rotation}deg) scale(${this.scale})`;
		this.domElement.style.backgroundColor = this.backgroundColor;
		this.domElement.style.backgroundImage = this.backgroundImage;
		this.domElement.style.backgroundPosition = "center";
		this.domElement.style.backgroundSize = "cover";
		this.domElement.style.transition = "100ms";
	}

	weakUpdateDomElement(){
		this.updateCSSProperties();
	}

	updateDomElement(){
		this.updateCSSProperties();
	}

	/**
	 * Delete the visible card from the game board
	*/
	deleteMe(){
		this.onDelete();
		delete objects[this.uuid];
		this.gameBoard.deleteBoardElement(this.uuid);
	}

	/**
	 *  Add a copy of the current card to the game board
	 */
	copyMe(){
		// create a visible card without calling the constructor
		let copyOfThis = new this.constructor(); // shallow copy and this is normal!
		let doNotCopy = ["uuid","domElement"];
		for (let attr in this) {
            if (this.hasOwnProperty(attr) && doNotCopy.indexOf(attr) === -1 && typeof this[attr] !== "function"){
            	copyOfThis[attr] = this[attr];
            }
        }
        copyOfThis.updateDomElement();
		this.gameBoard.addBoardElement(copyOfThis);
	}
}

/**
 * Get the nearest board element to element that is closer than sqrt(threshold)
 * If no such element exists, return null.
 * 
 * @param element {VisibleBoardElement}
 * @param threshold {number}
 * @return {VisibleBoardElement}
 * 
*/ 
function getNearestCard(element, threshold){
	let minDistSquared = threshold;
	let cardRef = null;
	for(let card of element.gameBoard.visibleElements){
		if(card instanceof VisibleCard){
			let d = (card.x - element.x)**2 + (card.y - element.y)**2;
			if(d < minDistSquared){
				minDistSquared = d;
				cardRef = card;
			}
		}
	}
	return cardRef;
}

/**
 * Represents a card on the game board 
*/
class VisibleCard extends VisibleBoardElement{

	/** Template of the card 
	 * @type {CardTemplate}*/
	template = null;
	
	/** Text displayed at the top right of the card */
	topRightNumber = "";
	/** Text displayed at the top left of the card */
	topLeftNumber = "";
	/** Text displayed at the bottom right of the card */
	bottomRightNumber = "";
	/** Text displayed at the bottom left of the card */
	bottomLeftNumber = "";

	/** Whever the delete button is displayed on the card */
	deletable = false;

	/** Whever the flip button is displayed on the card */
	flippable = false;

	/** Whever the copy button is displayed on the card */
	copiable = false;

	/** Called when the card is flipped
	 * @event */
	onFlipped = () => {};

	/** Called when the card is inserted back into a deck
	 * @event */
	onInserted = () => {};

	/**
	* Create a new Visible Card
	* @param {CardTemplate} cardTemplate - The template of the card.
	* @param {object} options - Various options like if the card can be moved / flipped / deleted / copied from the gui.
	*/
	constructor(cardTemplate,options){
		super(options);		
		options = options || {};
		cardTemplate = cardTemplate || blankTemplate;

		this.template = cardTemplate;
		this.flipped = options.flipped || false;


		if(options.rotation){
			this.rotation = options.rotation;
		}else if(typeof this.template.metadata.rotation === "function"){
			this.rotation = this.template.metadata.rotation();
		}else if(typeof this.template.metadata.rotation === "number"){
			this.rotation = this.template.metadata.rotation;
		}else{
			this.rotation = 0;
		}

		this.movable = options.movable || true;
		this.deletable = options.deletable || false;
		this.flippable = options.flippable || false;
		this.copiable = options.copiable || false;

		this.domElement.className += " card-cartomancy";
		this.domElement.innerHTML = `
			<span class='tr-nb-cartomancy nb-cartomancy'>${this.topRightNumber}</span>
			<span class='tl-nb-cartomancy nb-cartomancy'>${this.topLeftNumber}</span>
			<span class='br-nb-cartomancy nb-cartomancy'>${this.bottomRightNumber}</span>
			<span class='bl-nb-cartomancy nb-cartomancy'>${this.bottomLeftNumber}</span>
			<div class='name-cartomancy'>${this.template.name}</div>
			<div class='description-cartomancy'>${this.template.description}</div>
			<div class='button-holder-cartomancy'></div>
			<div class='flipped-indicator-cartomancy'>Flipped</div>
		`;
		// setup button based on permissions.
		let rc = (c) => this.domElement.getElementsByClassName(c)[0];
		let bholder = rc("button-holder-cartomancy");

		function insertButton(label, event){
			let b = document.createElement("button");
			b.innerHTML = label;
			b.onclick = event;
			bholder.appendChild(b);
		}

		if(this.flippable){
			insertButton("Flip", () => {
				this.flipped = !this.flipped;
				this.onFlipped();
				this.updateDomElement();
			});
		}
		if(this.deletable){
			insertButton("Delete", () => {
				this.deleteMe(); // deleteMe handles onDelete event
			});
		}
		if(this.copiable){
			insertButton("Make a copy", () => {
				this.copyMe();
			});
		}

		this.updateDomElement();
	}
	/**
	 * Update the domElement so that it reflects the properties of the VisibleCard 
	 */ 
	updateDomElement(){
		// You need to call this after modifying the properties of the card so that the dom updates.
		this.weakUpdateDomElement();
		
		// Compute permission diff and rebuild button holder if needed.
		// This is expensive as be have to reconstruct the event handlers.
	
		let rc = (c) => this.domElement.getElementsByClassName(c)[0];
		let bholder = rc("button-holder-cartomancy");
		bholder.innerHTML = "";
		function insertButton(label, event){
			let b = document.createElement("button");
			b.innerHTML = label;
			b.onclick = event;
			bholder.appendChild(b);
		}

		if(this.flippable){
			insertButton("Flip", () => {
				this.flipped = !this.flipped;
				this.onFlipped();
				this.weakUpdateDomElement();
			});
		}
		if(this.deletable){
			insertButton("Delete", () => {
				this.deleteMe(); // deleteMe handles onDelete event
			});
		}
		if(this.copiable){
			insertButton("Make a copy", () => {
				this.copyMe();
			});
		}
	}
	weakUpdateDomElement(){
		// You need to call this after modifying the position / color of the card.
		// This updates less stuff than updateDomElement.
		let rc = (c) => this.domElement.getElementsByClassName(c)[0];
		this.updateCSSProperties();
	
		if(this.flipped){
			rc("flipped-indicator-cartomancy").style.display = "block";
		}else{
			rc("flipped-indicator-cartomancy").style.display = "";			
		}

		let dispStateOfRegular = this.flipped ? "none" : "";
		rc("flipped-indicator-cartomancy").style.display = dispStateOfRegular;
		rc("tr-nb-cartomancy").style.display = dispStateOfRegular;
		rc("tl-nb-cartomancy").style.display = dispStateOfRegular;
		rc("br-nb-cartomancy").style.display = dispStateOfRegular;
		rc("bl-nb-cartomancy").style.display = dispStateOfRegular;
		rc("name-cartomancy").style.display = dispStateOfRegular;
		rc("description-cartomancy").style.display = dispStateOfRegular;

		if(this.topRightNumber === ""){
			rc("tr-nb-cartomancy").style.display = "none";
		}
		if(this.topLeftNumber === ""){
			rc("tl-nb-cartomancy").style.display = "none";
		}
		if(this.bottomRightNumber === ""){
			rc("br-nb-cartomancy").style.display = "none";
		}
		if(this.bottomLeftNumber === ""){
			rc("bl-nb-cartomancy").style.display = "none";
		}

		rc("tr-nb-cartomancy").innerHTML = this.topRightNumber;
		rc("tl-nb-cartomancy").innerHTML = this.topLeftNumber;
		rc("br-nb-cartomancy").innerHTML = this.bottomRightNumber;
		rc("bl-nb-cartomancy").innerHTML = this.bottomLeftNumber;

		rc("name-cartomancy").innerHTML = this.template.name;
		rc("description-cartomancy").innerHTML = this.template.description;
	}
}


/**
 * Represents a deck of cards.
 * However, then a card is drawn, an arbitrary function is called.
 * This deck has no concept of size or shuffle, it's purely a card generator 
*/ 
class VirtualDeck extends VisibleBoardElement{
	x = 0;
	y = 0;

	backgroundColor = "#a33";
	deckLabel = "Deck";

	onDraw = () => {};

	drawCard = () => {
		return new VisibleCard(blankTemplate,{});
	};

	constructor(deckLabel){
		super();
		this.deckLabel = deckLabel || this.deckLabel;

		this.domElement.innerHTML = `
			<div class='name-cartomancy'>${this.deckLabel}</div>
			<div class='description-cartomancy'></div>
			<div class='button-holder-cartomancy'></div>
		`;

		// "Draw a card from the deck"
		let rc = (c) => this.domElement.getElementsByClassName(c)[0];
		let bholder = rc("button-holder-cartomancy");
		bholder.innerHTML = "";
		function insertButton(label, event){
			let b = document.createElement("button");
			b.innerHTML = label;
			b.onclick = event;
			bholder.appendChild(b);
		}
		insertButton("Draw a card", () => {
			let newCard = this.drawCard();
			newCard.x = this.x;
			newCard.y = this.y + 80;
			newCard.weakUpdateDomElement();

			if(newCard instanceof VisibleCard){
				this.gameBoard.addBoardElement(newCard);
			}else{
				console.error("drawCard did not return a card.");
			}
		});

		this.weakUpdateDomElement();
	}
}

/**
 * Represents a paper shredder that can destroy cards.
 * Don't worry, the memory is recycled by the garbage collector afterwards.
*/ 
class TrashCan extends VisibleBoardElement{
	backgroundColor = "#222";
	color = "white";

	constructor(){
		super();

		this.domElement.innerHTML = `
			<div class='name-cartomancy'>Trash Can</div>
			<div class='button-holder-cartomancy'></div>
		`;

		// "Draw a card from the deck"
		let rc = (c) => this.domElement.getElementsByClassName(c)[0];
		let bholder = rc("button-holder-cartomancy");
		bholder.innerHTML = "";
		function insertButton(label, event){
			let b = document.createElement("button");
			b.innerHTML = label;
			b.onclick = event;
			bholder.appendChild(b);
		}
		insertButton("Destroy nearest close card", () => {
			// threshold to avoid deleting cards that are too far away as it might be unintentionnal.
			let cardRef = getNearestCard(this, 999999);
			if(cardRef !== null){
				cardRef.deleteMe();
			}
		});

		this.weakUpdateDomElement();
	}
}

/**
 * Represents a deck of cards, with one stack unto the other 
 * 
 * 
*/ 
class Deck extends VirtualDeck{
	/** Array representing the content of the deck */
	cardContent = [];

	constructor(decklabel){
		super(decklabel);
		let rc = (c) => this.domElement.getElementsByClassName(c)[0];
		let desc = rc("description-cartomancy");
		desc.innerHTML = `${this.cardContent.length} cards left in deck.`;
		let bholder = rc("button-holder-cartomancy");
		function insertButton(label, event){
			let b = document.createElement("button");
			b.innerHTML = label;
			b.onclick = event;
			bholder.appendChild(b);
		}
		insertButton("Shuffle", () => {
			this.shuffle();
		});

		insertButton("Insert on top", () => {
			let cardRef = getNearestCard(this, 999999);
			this.cardContent.push(cardRef);
			this.gameBoard.deleteBoardElement(cardRef.uuid);
			this.updateDomElement();
		});

		insertButton("Insert at bottom", () => {
			let cardRef = getNearestCard(this, 999999);
			this.cardContent.unshift(cardRef);
			this.gameBoard.deleteBoardElement(cardRef.uuid);
			this.updateDomElement();
		});
	}
	/**
	 *  Draw a card from the top of the deck
	 */ 
	drawCard = () => {
		if(this.cardContent.length > 0){
			let c = this.cardContent.pop()
			this.updateDomElement();
			return c;
		}
	}

	/**
	 *  Shuffle the cards in the deck
	 */ 
	shuffle(){
		for (let i = this.cardContent.length - 1; i > 0; i--) {
        	const j = Math.floor(Math.random() * (i + 1));
        	[this.cardContent[i], this.cardContent[j]] = [this.cardContent[j], this.cardContent[i]];
    	}
		this.updateDomElement();
	}

	/**
	 *  Make the javascript representation of the object match the HTML Representation
	 */ 
	updateDomElement(){
		this.weakUpdateDomElement();
		// You need to call this after modifying the position / color of the card.
		// This updates less stuff than updateDomElement.
		let rc = (c) => this.domElement.getElementsByClassName(c)[0];
		this.updateCSSProperties();
		rc("description-cartomancy").innerHTML = `${this.cardContent.length} cards left in deck.`;
	}
}



/**
 * Represents the game board 
 * 
 * @example
 * // Create a game board and display one card on it.
 * let game = new CardGame(document.body);
 * let template = new CardTemplate("Red Dragon","An awesome dragon !");
 * game.addCardFromTemplate(template, {flippable: true});
*/
class CardGame{
	/**
	* Represents the game board
	* @param {HTMLElement} dom 
	*/
	constructor(dom){
		this.dom = dom;	
		this.visibleElements = [];
		this.dom.innerHTML = "";

		// insert css inside head.
		let style = `
			.board-element-cartomancy{
				width:${cardWidth}px;
				height:${cardHeight}px; /* 1.414 ratio */
				position:absolute;
				background-color:#eee;
				font-family: Arial, sans-serif;
				padding:30px;
				user-select:none;
			}
			.flipped-indicator-cartomancy{
				display:none;
				position:absolute;
				top:50%:
				left:50%;
				font-size: 1.5em;
			}
			.nb-cartomancy{
				display:inline-block;
				border-radius:50%;
				padding:5px;
				font-size: 1.5em;
				background-color:#eee;
				position:absolute;
			}
			.tr-nb-cartomancy{
				top:-5px;
				right:-5px;
			}
			.tl-nb-cartomancy{
				top:-5px;
				left:-5px;
			}
			.br-nb-cartomancy{
				bottom:-5px;
				right:-5px;
			}
			.bl-nb-cartomancy{
				bottom:-5px;
				left:-5px;
			}
			.description-cartomancy{
				font-family: serif;
				font-size: 0.8em;
				font-weight: normal;
			}

			.name-cartomancy{
				font-size: 1.1em;
				font-weight: bold;
			}
		`;
		let el = document.createElement("style");
		el.innerText = style;
		document.head.appendChild(el);
	}

	/**
	 *  Create a new visible card and add it to the game board
	 *  
	 *  @param {CardTemplate} template - The template of the new card
	 *  @param {object} options - Options when creating the new card. Check out the constructor of VisibleCard for more informations.
	 * 	@returns {string} The uuid of the new card.
	*/
	addCardFromTemplate(template, options){
		let card = new VisibleCard(template, options);
		card.gameBoard = this;
		this.visibleElements.push(card);
		this.dom.appendChild(card.domElement);
	}

	/**
	 *  Add an existing visible card or deck to the game board
	 *  
	 *  @param {VisibleBoardElement} card - The card/deck to add
	*/
	addBoardElement(card){
		card.gameBoard = this;
		this.visibleElements.push(card);
		this.dom.appendChild(card.domElement);
	}

	/**
	 * Delete a board element from the board based on it's uuid. Linear time.
	 * @param {string} UUID
	*/
	deleteBoardElement(uuid){
		for(let i = 0;i < this.visibleElements.length;i++){
			if(this.visibleElements[i].uuid == uuid){
				this.dom.removeChild(this.visibleElements[i].domElement);
				this.visibleElements.splice(i, 1);
				i -= 1;
			}
		}
	}

	/**
	 * Retreive a visible card or deck from it's uuid. Return null if no such card exists
	 * @param {string} UUID
	 * @returns {VisibleBoardElement} The visible card/deck with the corresponding uuid
	*/
	getBoardElementById(uuid){
		return objects[uuid] ? objects[uuid] : null;
	}

	/**
	 * Retreive all visible cards built using a given template
	 * @param {CardTemplate} template
	 * @returns {VisibleCard[]} An array of visible cards
	*/
	getCardsByTemplate(template){
		let cards = [];
		for(let card of this.visibleElements){
			if(card instanceof VisibleCard && card.template === template){
				cards.push(card);
			}
		}
		return cards;
	}

	resetBoard(){
		this.dom.innerHTML = "";
		for(let card of this.visibleElements){
			this.dom.appendChild(card.domElement);
		}
	}
}


let movedObject = null;
let lastMovedObject = null;

function handlePressEvent(e){
	let p = e.composedPath();
	if(p[0].classList.contains("board-element-cartomancy")){
		// Find corresponding card object.
		let obj = objects[p[0].getAttribute("data-uuid")];
		if(typeof obj !== "undefined" && obj.movable){
			if(lastMovedObject !== null){
				lastMovedObject.domElement.style.zIndex = 0;
			}
			movedObject = obj;
			movedObject.scale = 1.2;
			movedObject.domElement.style.zIndex = 1;
		}
	}
}

function handleUnpressEvent(e){
	if(movedObject !== null){
		movedObject.scale = 1.0;
		movedObject.weakUpdateDomElement();
		lastMovedObject = movedObject;
	}
	movedObject = null; // reset moved object.
}

let oldX = -1;
let oldY = -1;
function handleMoveEvent(e){
	if(movedObject !== null && oldX != -1 && oldY != -1){
		movedObject.x += (e.clientX - oldX);
		movedObject.y += (e.clientY - oldY);
		if(!movedObject.lockInPlace){
			movedObject.lockx = movedObject.x;
			movedObject.locky = movedObject.y;
		}
		movedObject.weakUpdateDomElement();
	}
	oldX = e.clientX;
	oldY = e.clientY;
}

addEventListener("mousedown", handlePressEvent);
addEventListener("touchstart", handlePressEvent);


addEventListener("mousemove", handleMoveEvent);
addEventListener("touchmove", (e) => {
	handleMoveEvent(e.changedTouches[0])
});

addEventListener("mouseup", handleUnpressEvent);
addEventListener("touchend", (e) => {
	oldX = -1;
	oldY = -1;
	handleUnpressEvent(e);
});
