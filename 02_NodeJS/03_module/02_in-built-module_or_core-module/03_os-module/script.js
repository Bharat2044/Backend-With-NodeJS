const os = require("os");

console.log("CPU Architecture: ", os.arch());  

console.log("Free Memory: ", os.freemem());   // gives in bytes

console.log("Total Memory: ", os.totalmem());
;   // gives in bytes
// console.log("List of Network Interface: ", os.networkInterfaces()); 
console.log("List of Network Interface: ", JSON.stringify(os.networkInterfaces())); 

console.log("OS default directory for temp Files: ", os.tmpdir()); 


console.log("Endiness of System: ", os.endianness());

console.log("Hostname: ", os.hostname());

console.log("Operating System Name: ", os.type());

console.log("Operating System Platform: ", os.platform());

console.log("OS Release: ", os.release());