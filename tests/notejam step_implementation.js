/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, screenshot, text, focus, textBox, toRightOf , click, near, below, press1} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};

step("Goto notejam", async () => {
    await goto('http://127.0.0.1:8000/');
});

step("Write <query>", async (query) => {
    await focus(textBox(below('Email')))
    await write(query);
    await focus(textBox(below('Password')))
    await write("Saloni#1999");

});


step("Press sign in", async function() {
	
	await click("sign in",near("sign up"));
});
step("click sign up", async function() {
	await goto("http://127.0.0.1:8000/");
	await click("sign up",near("sign in"));
	await focus(textBox(below('Email')));
	await focus(textBox(below('Email')));
	await write("Umachaudhary898@gmail.com");
	await focus(textBox(below('Password')));
	await write("hi");
	await focus(textBox(below('Confirm password')));
	await write("hi");
	await click("sign up",near("sign in"));
});
step("click forgot password", async function() {
	await goto("http://127.0.0.1:8000/");
	await click("Forgot password?");
	await focus(textBox(below('Password')));
	await focus(textBox(below('Email')));
	await write("Salonichauhan175@gmail.com");
	await click("Generate password");
});

step("click notejam", async function() {
	await goto("http://127.0.0.1:8000/");
	await click("notejam:");
});

step("Click GitHub at end of the page", async function() {
	
	await goto("http://127.0.0.1:8000/");
	await click("Github",near("Twitter"));
});






