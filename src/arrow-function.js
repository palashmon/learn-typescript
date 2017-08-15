// Arrow Functions
//---------------------------------------------
{
    // In JavaScript, we write a function like
    var buildName = function (firstName, lastName) {
        return 'Hello, ' + firstName + ' ' + lastName;
    };
    // and then call it like
    var fullname = buildName('Palash', 'Mondal');
    console.log(fullname);
}
{
    // In TypeScript, we can use arrow function like
    var buildName = function (firstName, lastName) { return "Hello, " + firstName + " " + lastName; };
    // and then call it like
    var fullname = buildName('Wes', 'Bos');
    console.log(fullname);
}
