import AuthManager from "../authManager.js";
import PageSales from "./sales.js";

export default class PageWishlist extends PageSales {
	getReference(ref) {
		return ref.where("wishlist", "array-contains", AuthManager.uid);
	}
}

