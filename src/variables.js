{
    function loop() {
        // variable index is declared inside the scope of for loop
        // but, index is still accessible outside for loop
        for (var index = 0; index < 4; index++) {
            console.log(index);
        }
        // Logging index again here
        console.log("Finally: " + index);
    }
    loop();
}
// Compile and run js file
// tsc src\variables.ts
// node src\variables.js
// Or, in one line like
// tsc src\variables.ts && node src\variables.js
