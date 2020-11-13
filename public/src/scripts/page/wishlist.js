import AuthManager from "../authManager.js";
import PageGames from "./games.js";

export default class PageWishlist extends PageGames {
	getReference(ref) {
		return ref.where("wishlist", "array-contains", AuthManager.uid);
	}
}

