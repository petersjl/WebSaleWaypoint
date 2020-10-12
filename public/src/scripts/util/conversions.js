import Game from "../model/game.js";
import Listing from "../model/listing.js";
import Store from "../model/store.js";
import Constants from "./constants.js";

export default class Conversions {
	/**
	 * Creates a Game instance from a DocumentSnapshot
	 * @param {firebase.firestore.DocumentSnapshot} snapshot
	 * @returns Game
	 */
	static gameFromSnapshot(snapshot) {
		const game = new Game(
			snapshot.get(Constants.fb.field.TITLE),
			snapshot.get(Constants.fb.field.DEVELOPER),
			snapshot.get(Constants.fb.field.DESCRIPTION)
		);
		// TODO iterate store listings
		game.id = snapshot.id;
		return game;
	}

	/**
	 * Converts a Game to an object ready to be pushed to Firestore
	 * @param {Game} game
	 * @returns Object
	 */
	static gameToObject(game) {
		const itch = game.stores.get(Store.ITCH);
		const nintendo = game.stores.get(Store.NINTENDO);
		const playstation = game.stores.get(Store.PLAYSTATION);
		const steam = game.stores.get(Store.STEAM);
		const xbox = game.stores.get(Store.XBOX);
		return {
			[Constants.fb.field.TITLE]: game.title,
			[Constants.fb.field.DEVELOPER]: game.developer,
			[Constants.fb.field.DESCRIPTION]: game.description,
			[Constants.fb.field.STORES]: {
				[Constants.fb.field.stores.ITCH]: Listing.toObject(itch),
				[Constants.fb.field.stores.NINTENDO]: Listing.toObject(nintendo),
				[Constants.fb.field.stores.PLAYSTATION]: Listing.toObject(playstation),
				[Constants.fb.field.stores.STEAM]: Listing.toObject(steam),
				[Constants.fb.field.stores.XBOX]: Listing.toObject(xbox)
			}
		};
	}
}
