/**
 * @fileOverview Main script for all pages
 * @author Cooper Anderson (andersc7), Joseph Peters (petersjl)
 */

import AuthManager from "./authManager.js";
import Page from "./page/page.js";
import PageAbout from "./page/about.js";
import PageLogin from "./page/login.js";
import PageSales from "./page/sales.js";
import PageWishlist from "./page/wishlist.js";

/**
 * Page instance
 * @type Page
 */
let page;

function checkForRedirects() {
	if (document.querySelector("#pageLogin") && AuthManager.isSignedIn) {
		window.location.href = "./sales.html";
	}
	if (!document.querySelector("#pageLogin") && !AuthManager.isSignedIn) {
		window.location.href = "/";
	}
}

function initializePage() {
	if (document.querySelector("#pageLogin")) page = new PageLogin();
	if (document.querySelector("#pageSales")) page = new PageSales();
	if (document.querySelector("#pageWishlist")) page = new PageWishlist();
	if (document.querySelector("#pageAbout")) page = new PageAbout();

	if (page) {
		Page.instance = page;
		page.main();
	}
}

$(() => {
	AuthManager.instance = new AuthManager();
	AuthManager.startListeners(() => {
		console.log(`Auth state changed: signedIn = ${AuthManager.isSignedIn}`);
		checkForRedirects();
		initializePage();
	});
});
