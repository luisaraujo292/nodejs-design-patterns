// main.js

console.log("First require: ")
require("./moduleA")  //  Output: ModuleA is loaded.

console.log("Second require: ")
require("./moduleA")  //  Output: No log message, module is cached.
