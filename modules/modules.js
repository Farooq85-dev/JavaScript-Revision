// Modules in JavaScript are a way to organize and structure your code into reusable pieces. Each module can contain variables, functions, classes, or objects that are specific to a certain part of your application. Modules allow you to keep your code clean, maintainable, and easier to test.

// Types of Modules
    //  ESM ---> ES6 (2015) Modern Way
    // Common Js Modules ---> Classic Way

// Only one export default in one file 
// In order to use modern way you have to expilict mention ESM Module. 
// In order to use Classical way you have to not expilictly mention Common Js Module. 
// Just Simple

// Differences b/w ESM vs CJS

// Export	export / export default || module.exports
// Import	import ||	require()
// Syntax	Static and explicit imports/exports ||	Dynamic and implicit imports
// Async Loading	Supports import() for dynamic loading || Does not support async loading
// Default Export	Can only have one default export || Can export anything using module.exports
// Node.js	Supported from Node.js 12+ || Default in Node.js