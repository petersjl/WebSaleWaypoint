import Conversions from "../util/conversions.js";
import Game from "../model/game.js";
import ListManager from "../listManager.js";
import Page from "./page.js";

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

		this.views.addDialog.submit.on("click", () => {
			ListManager.add(
				this.views.addDialog.title.val(),
				this.views.addDialog.developer.val(),
				this.views.addDialog.description.val(),
				this.views.addDialog.image.val()
			);
		});
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
		return clone;
	}
}
