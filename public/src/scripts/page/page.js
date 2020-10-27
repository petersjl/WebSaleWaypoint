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

	constructor() {
		// TODO: load settings
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
