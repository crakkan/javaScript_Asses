// solution
function getFileExtension(filename) {
    const parts = filename.split('.');
    if (parts.length === 1) {
        return "No extension found";
    }
    return parts[parts.length - 1];
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a filename: ", function (filename) {
    const extension = getFileExtension(filename);
    console.log(`File extension: ${extension}`);
    rl.close();
});