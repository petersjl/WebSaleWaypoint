import AuthManager from "../authManager.js";

/**
 * Abstract Page class
 * @abstract
 */
export default class Page {
	/**
	 * Singleton instance
	 * @type Page
	 */
	static instance;

	/**
	 * Url parameters
	 * @type URLSearchParams
	 */
	urlParams;

	constructor() {
		this.urlParams = new URLSearchParams(window.location.search);

		$("#logout").on("click", AuthManager.signOut);
	}

	redirect(url) {
		// TODO: persist settings
		window.location.href = url;
	}

	/**
	 * This page's main method, where you set up the controllers, etc.
	 * This is the equivalent of what we were doing in the follow-alongs
	 * @abstract
	 */
	main() {}
}
