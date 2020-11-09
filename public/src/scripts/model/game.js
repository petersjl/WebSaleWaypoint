import Listing from "./listing.js";

export default class Game {
	/**
	 * ID of the Game
	 * @type {string}
	 */
	id;
	/**
	 * Full title of the Game
	 * @type {string}
	 */
	title;
	/**
	 * Name of the Game's developer
	 * @type {string}
	 */
	developer;
	/**
	 * Full description of the Game
	 * @type {string}
	 */
	description;
	/**
	 * Full URL for the Game's image
	 * @type {string}
	 */
	image;
	/**
	 * Store pricing information
	 * @type {Map<StoreType, Listing>}
	 */
	stores;

	constructor(title="", developer="", description="", image="") {
		this.title = title;
		this.developer = developer;
		this.description = description;
		this.image = image;
		this.stores = new Map();
	}
}
