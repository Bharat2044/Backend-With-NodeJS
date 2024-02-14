/**
 * String
 */

let name = 'Bharat';

let city = "Bangalore";

console.log(name , city);
console.log(typeof name);

/**
 * Accessing character based on index
 */
console.log(name[0]);

console.log(name[3]);
console.log(name[11]);

name[2] ="M";
console.log(name);

//length of the string
console.log(name.length);

// add 2 string
let first_name = "Bharat";
let last_name = " Kumar";

let full_name = first_name.concat(last_name);
console.log(full_name);

console.log( first_name + last_name);

/**
 * covnert that into upper case
 */
console.log(full_name.toUpperCase());

/**
 * covnert that into lower case
 */
console.log(full_name.toLowerCase());


/**
 * Character at any index str[i]
 */
console.log(name.charAt(3));


/**
 * slicing
 */
console.log(full_name);
console.log(full_name.slice(2));
console.log(full_name.slice(2,5));
console.log(full_name.slice(-5));
console.log(full_name.slice(-5,-1));

/**
 * indexOf
 */
console.log(name.indexOf('z'));


/**
 * trim
 */
let word = " Bharat "
console.log(word);;
console.log(word.trim());

// split
name = "Bharat Kumar Singh"

console.log(name.split(""));