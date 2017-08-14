function loopUsingLet() {
    // variable index is declared inside the scope of for loop
    // but, index is still accessible outside for loop
    for (var index = 0; index < 4; index++) {
        console.log(index);
    }
    // Logging index again here
    console.log("Finally: " + index); // <=== Typescript compile time error here "Cannot find name 'index'"
}
loopUsingLet();
