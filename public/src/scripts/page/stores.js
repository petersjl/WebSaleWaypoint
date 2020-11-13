import PageSales from "./sales.js";

export default class PageStores extends PageSales {
	static stores = ["steam", "xbox", "playstation", "nintendo", "itch"];

	getReference(ref) {
		let store = this.urlParams.get("store");
		if (!PageStores.stores.includes(store)) this.redirect("./sales.html");
		return ref.where(`stores.${store}.listed`, "==", true);
	}
}

