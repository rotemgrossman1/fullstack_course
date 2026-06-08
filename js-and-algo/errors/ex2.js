const fs = require('fs');

function readFileWithErrorHandling(inFile, callback) {
    try {              
        const stats = fs.statSync(inFile);//check if its a directory
        if (stats.isDirectory()) {//return its not a file
            return callback(`Error: "${inFile}" is a directory, not a file.`);
        }
        const data = fs.readFileSync(inFile);//start reading the data
        return callback(`Success: File read successfully. Size: ${stats.size} bytes`);
    } catch (error) {//catch and hendle errors
        if (error.code === 'ENOENT') {//if its not found 
            return callback(`File not found: ${inFile}`);
        }//other errors
        return callback(`Error: ${error.message}`);
    }
}
readFileWithErrorHandling('existing.txt', (result) => {
    console.log(result);
    // Success: "File read successfully. Size: 150 bytes"
    // Or error: "File not found: existing.txt"
});