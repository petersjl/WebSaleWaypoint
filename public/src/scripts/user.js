export default class User {
	/**
	 * Singleton instance
	 * @type {User}
	 * @private
	 */
	static instance;

	/**
	 * @type string
	 * @private
	 */
	userID;

	/**
	 * The currently logged in User's ID
	 * @returns {string}
	 */
	static get id() {
		return User.instance.userID;
	}
}
