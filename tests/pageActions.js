var _selectors = require('./selectors')
const {
    scrollTo,scrollUp,press,highlight,hover
} = require('taiko');

step("Scroll to <table>", async function(table) {
	await scrollTo(_selectors.getElement(table));
});

step("Scroll up <table>", async function(table) {
	await scrollUp(_selectors.getElement(table));
});

step("Press <key>", async function(key) {
	await press(key);
});

step("Highlight <selector>",async function(selector){
	await highlight(selector);
});

step("Hover on element <table>", async function(table) {
	await hover(_selectors.getElement(table))
});