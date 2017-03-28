"use strict"
var fs = require('fs-extra');  //instead of fs, which is not currently in use on npm

//usage is: node <your js using the module> <your input file>
//example: node index.js test.txt

//converts text in an input file to uppercase and saved to an output file 'output.txt'
function convertFile() {
    if(process.argv.length > 2) { 		 		//has input file
        var myfile = process.argv[2]; 			//third arg is the input file

        if(fs.existsSync(myfile)) {
            var content = fs.readFileSync(myfile, 'utf8');

            //converted text saved to output.txt
            fs.writeFileSync('output.txt', content.toUpperCase()); 
            console.log("Done"); 				//all content converted to uppercase
        } else {
            console.log("File does not exist - " + myfile);  //input file not found
        }
    } else {
        console.log("Pass on a file name/path"); //input file not provided
    }
}

//method which needs to called to do conversion
exports.toUpperCase = convertFile;