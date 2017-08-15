// Type assertions
//---------------------------------------------
{
    // A type assertion is like a type cast in other languages,
    // but performs no special checking or restructuring of data.
    // It has no runtime impact, and is used purely by the compiler.
    // Type assertions have two forms. One is the “angle-bracket” syntax:
    var message = 'this is a string';
    var strLength = message.length; // by default, we did not had the length property in intellisense
    // And the other is the as-syntax:
    var msgLength = message.length;
}
