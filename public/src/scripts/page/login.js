import Page from "./page.js";

export default class PageLogin extends Page {
	main() {
		this.initFirebaseUI();
	}

	initFirebaseUI() {
		const uiConfig = {
			signInSuccessUrl: "/",
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID
			]
		};

		const ui = new firebaseui.auth.AuthUI(firebase.auth());
		ui.start("#firebaseUIAuthContainer", uiConfig);
	}
}

