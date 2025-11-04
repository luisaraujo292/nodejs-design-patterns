const originalRequire = require

console.log(typeof require)

require = "I am a string."

console.log(require)
console.log(originalRequire)

const fs = originalRequire('fs')
//const wrappedSrc = ${fs.readFileSync(filename, 'utf8')}
console.log (wrappedSrc)


/*
    `(function (module, exports, require) {
      ${fs.readFileSync(filename, 'utf8')}
    })(module, module.exports, require)`
*/
