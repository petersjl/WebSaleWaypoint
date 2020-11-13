import Conversions from "../util/conversions.js";
import Game from "../model/game.js";
import ListManager from "../listManager.js";
import Listing from "../model/listing.js";
import Page from "./page.js";
import Store from "../model/store.js";

export default class PageSales extends Page {
	/**
	 * @type {{games: HTMLElement}}
	 */
	views;

	init() {
		this.views = {
			games: $("#games"),
			addDialog: {
				modal: $("#dialogGameAdd"),
				submit: $("#submitGameAdd"),
				title: $("#inputTitle"),
				developer: $("#inputDev"),
				description: $("#inputAbout"),
				image: $("#inputImage"),
				steam: {price: $("#inputSteamPrice"), sale: $("#inputSteamSale")},
				xbox: {price: $("#inputXboxPrice"), sale: $("#inputXboxSale")},
				playstation: {price: $("#inputPlaystationPrice"), sale: $("#inputPlaystationSale")},
				itch: {price: $("#inputItchPrice"), sale: $("#inputItchSale")},
				nintendo: {price: $("#inputNintendoPrice"), sale: $("#inputNintendoSale")}
			}
		};
	}

	main() {
		console.log("test");
		let lm = new ListManager();
		lm.startListeners(() => {
			this.views.games.empty();
			ListManager.instance.snapshots.forEach(item => {
				const game = Conversions.gameFromSnapshot(item);
				for (let i = 0; i < 1; i++) {
					this.views.games.append(PageSales.createGameView(game));
				}
			});
		});

		this.views.addDialog.modal.on("show.bs.modal", () => {
			this.setInputsAsRequired(false);
			this.views.addDialog.title.val("");
			this.views.addDialog.developer.val("");
			this.views.addDialog.description.val("");
			this.views.addDialog.image.val("");
			this.views.addDialog.steam.price.val("");
			this.views.addDialog.steam.sale.val("");
			this.views.addDialog.xbox.price.val("");
			this.views.addDialog.xbox.sale.val("");
			this.views.addDialog.playstation.price.val("");
			this.views.addDialog.playstation.sale.val("");
			this.views.addDialog.itch.price.val("");
			this.views.addDialog.itch.sale.val("");
			this.views.addDialog.nintendo.price.val("");
			this.views.addDialog.nintendo.sale.val("");
		});

		this.views.addDialog.submit.on("click", () => {
			let stores = {
				itch: Listing.toObject(new Listing(
					this.views.addDialog.itch.price.val(),
					this.views.addDialog.itch.sale.val()
				)),
				nintendo: Listing.toObject(new Listing(
					this.views.addDialog.nintendo.price.val(),
					this.views.addDialog.nintendo.sale.val()
				)),
				playstation: Listing.toObject(new Listing(
					this.views.addDialog.playstation.price.val(),
					this.views.addDialog.playstation.sale.val()
				)),
				steam: Listing.toObject(new Listing(
					this.views.addDialog.steam.price.val(),
					this.views.addDialog.steam.sale.val()
				)),
				xbox: Listing.toObject(new Listing(
					this.views.addDialog.xbox.price.val(),
					this.views.addDialog.xbox.sale.val()
				))
			};

			let success = ListManager.add(
				this.views.addDialog.title.val(),
				this.views.addDialog.developer.val(),
				this.views.addDialog.description.val(),
				this.views.addDialog.image.val(),
				stores
			);

			if (success) this.views.addDialog.modal.modal("hide");
			else this.setInputsAsRequired(true);
		});
	}

	/**
	 * Set the required state of the inputs
	 * @param {boolean} value
	 */
	setInputsAsRequired(value=true) {
		this.views.addDialog.title.prop("required", value);
		this.views.addDialog.developer.prop("required", value);
		this.views.addDialog.description.prop("required", value);
		this.views.addDialog.image.prop("required", value);

		if (!value) return;
		if (!this.views.addDialog.title.val()) this.views.addDialog.title.focus();
		else if (!this.views.addDialog.developer.val()) this.views.addDialog.developer.focus();
		else if (!this.views.addDialog.description.val()) this.views.addDialog.description.focus();
		else if (!this.views.addDialog.image.val()) this.views.addDialog.image.focus();
	}

	/**
	 * Create a new Game view
	 * @param {Game} game
	 * @return {HTMLElement}
	 */
	static createGameView(game) {
		let template = $("#templateGame").contents();
		let clone = template.clone(true, true);
		clone.find(".game-image").attr("src", game.image);
		clone.find(".game-store-steam").attr("src", `img/steam/${game.stores.get(Store.STEAM).getIcon()}.png`);
		clone.find(".game-store-xbox").attr("src", `img/xbox/${game.stores.get(Store.XBOX).getIcon()}.png`);
		clone.find(".game-store-playstation").attr("src", `img/playstation/${game.stores.get(Store.PLAYSTATION).getIcon()}.png`);
		clone.find(".game-store-itch").attr("src", `img/itch/${game.stores.get(Store.ITCH).getIcon()}.png`);
		clone.find(".game-store-nintendo").attr("src", `img/nintendo/${game.stores.get(Store.NINTENDO).getIcon()}.png`);
		return clone;
	}
}
