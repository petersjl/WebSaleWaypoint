/**
 * @fileOverview Main script for all pages
 * @author Cooper Anderson (andersc7), Joseph Peters (petersjl)
 */

import Page from "./page/page.js";
import PageSales from "./page/sales.js";
import PageWishlist from "./page/wishlist.js";

/**
 * Page instance
 * @type Page
 */
let page;

$(() => {
	if (document.querySelector("#pageWishlist")) page = new PageWishlist();
	if (document.querySelector("#pageSales")) page = new PageSales();

	if (page) {
		Page.instance = page;
		page.main();
	}
});
