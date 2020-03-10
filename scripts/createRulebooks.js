const { handbooker, } = require( "handbooker" );

// ---------------------------------

const options = {
	debug: true,
	pdfOptions: {
		displayHeaderFooter: false,
    base: "file://" + process.cwd() + '/',
    height: "282mm",
    width: "216mm",
	},
};

const target = "./example-document.md";

const destination = "./example-document.pdf";

// ---------------------------------

handbooker( target, destination, options, );
