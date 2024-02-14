const path = require("path");

console.log(path.sep);

console.log(process.env.PATH);

console.log(path.delimiter);

const filePath1 = '/public_html/home/index.html';

const currentFilePath = __filename;
console.log(currentFilePath);
console.log(__dirname);

let baseName = path.basename(currentFilePath);
console.log("baseName = ", baseName);

let baseNameWithoutExtension = path.basename(currentFilePath, '.js');
console.log("baseNameWithoutExtension = ", baseNameWithoutExtension);

let directoryName = path.dirname(currentFilePath);
console.log("directoryName = ", directoryName);

let extensionName = path.extname(currentFilePath);
console.log("extensionName = ", extensionName);
console.log("extensionName2 = ", path.extname('index.md.js'));

let pathToFile = path.format({
    dir: '/public_html/home',
    base: 'index.html'
})

console.log("pathToFile = ", pathToFile);


let isAbsolutePath = path.isAbsolute(currentFilePath);
console.log("isAbsolutePath = ", isAbsolutePath);
console.log("isAbsolutePath = ", path.isAbsolute("/index.js"));
console.log("isAbsolutePath = ", path.isAbsolute("./index.js"));
console.log("isAbsolutePath = ", path.isAbsolute("../index.js"));


let pathToDirectory = path.join('/home', 'js', 'index.js');
console.log("pathToDirectory = ", pathToDirectory);


console.log("Parse = ", path.parse(currentFilePath));

console.log("Relative path = ", path.relative('/home/user/config', '/home/user/js'));


console.log("Resolve", path.resolve());

console.log("Normalize", path.normalize('//home//user//js'));