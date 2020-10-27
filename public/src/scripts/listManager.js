import Constants from "./util/constants.js";
import Conversions from "./util/conversions.js";

export default class ListManager {
	/**
	 * Singleton instance
	 * @type ListManager
	 * @private
	 */
	static instance;

	/**
	 * Reference to the Collection of Games in Firestore
	 * @type firebase.firestore.CollectionReference
	 * @private
	 */
	ref;
	/**
	 * Reference to the CollectionSnapshot of Games in Firebase
	 * @type Array<firebase.firestore.DocumentSnapshot>
	 * @private
	 */
	snapshots;
	/**
	 * Method to unsubscribe snapshot listeners
	 * @type CallableFunction
	 * @private
	 */
	unsubscribe;

	constructor() {
		if (ListManager.instance) return;
		this.ref = firebase.firestore().collection(Constants.fb.collection.GAMES);
		ListManager.instance = this;
	}

	/**
	 * Initialize the snapshot listeners
	 * @param {CallableFunction} callback
	 */
	startListeners(callback) {
		this.unsubscribe = this.ref.onSnapshot(snapshot => {
			this.snapshots = snapshot.docs;
			if (callback) callback();
		});
	}

	/**
	 * Cancel the snapshot listeners
	 */
	stopListeners() {
		if (this.unsubscribe) this.unsubscribe();
		this.unsubscribe = undefined;
	}

	/**
	 * Number of Games in the list
	 * @returns {number}
	 */
	static get length() {
		return ListManager.instance.snapshots.length;
	}

	/**
	 * Get a reference to the Game at a specific index
	 * @param {number} index
	 * @returns {Game}
	 */
	static getGameAt(index) {
		if (index < 0 || index >= ListManager.length) return undefined;
		return Conversions.gameFromSnapshot(ListManager.instance.snapshots[index]);
	}
}
