import Constants from "../util/constants.js";

export default class Listing {
	/**
	 * If the Game is listed on this Store
	 * @type {boolean}
	 */
	listed = false;
	/**
	 * The price of the Game on the Store
	 * @type {number}
	 */
	price = 0;
	/**
	 * The sale of the Game on the Store
	 * @type {number}
	 */
	sale = 0;

	/**
	 * @param {Listing} listing
	 * @returns Object
	 */
	static toObject(listing) {
		return {
			[Constants.fb.field.listing.LISTED]: listing ? listing.listed : false,
			[Constants.fb.field.listing.PRICE]: listing ? listing.price : 0,
			[Constants.fb.field.listing.SALE]: listing ? listing.sale : 0
		}
	}
}
