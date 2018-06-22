const { handbooker, } = require( "handbooker" );

// ---------------------------------

const options = {
	debug: true,
	style: "./node_modules/handbooker/lib/styles/homebrewery-styles.css",
	printOptions: {
		displayHeaderFooter: false,
	},
};

const target = "./example-document.md";
const destination = "./example-document.pdf";

// ---------------------------------

handbooker( target, destination, options, );
