import PageGames from "./games.js";

export default class PageSales extends PageGames {
	getReference(ref) {
		return ref.where("onSale", "==", true);
	}
}

