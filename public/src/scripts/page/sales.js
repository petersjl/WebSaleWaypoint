import Game from "../model/game.js";
import ListManager from "../listManager.js";
import Page from "./page.js";
import Conversions from "../util/conversions.js";

export default class PageSales extends Page {
	/**
	 * @type {{games: HTMLElement}}
	 */
	views;

	init() {
		this.views = {
			games: $("#games")
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
