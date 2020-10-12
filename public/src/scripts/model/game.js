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
	 * Store pricing information
	 * @type {Map<StoreType, Listing>}
	 */
	stores;

	constructor(title="", developer="", description="") {
		this.title = title;
		this.developer = developer;
		this.description = description;
		this.stores = new Map();
	}
}
