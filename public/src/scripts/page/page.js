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
	 * @abstract
	 */
	main() {}
}
