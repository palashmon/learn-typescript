// Used here to fix issue
// Cannot redeclare block-scoped variable
{
    // Boolean
    //---------------------------------------------
    var isDone = false;
    console.log(typeof isDone); // boolean
    // Number
    //---------------------------------------------
    var decimal = 6;
    var hex = 0xf00d;
    var binary = 10;
    var octal = 484;
    console.log(typeof decimal); // number
    // String
    //---------------------------------------------
    var color = 'blue';
    // color = true; // <=== Type 'true' is not assignable to type 'string'
    console.log(typeof color); // string
    // We can also use template strings, which can span multiple lines and have embedded expressions
    var fullName = "Palash Mondal";
    var sentence = "Hello, my name is " + fullName;
    console.log(sentence);
    // Array
    //---------------------------------------------
    var list = [1, 2, 3];
    console.log(typeof list); // `object` in javascript code
    // The second way uses a generic array type, Array<elemType>:
    var moreList = [1, 2, 3];
    console.log(typeof moreList); // `object` in javascript code
    // Enum
    //---------------------------------------------
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 4] = "Blue";
    })(Color || (Color = {}));
    var greenColor = Color.Green;
    console.log(typeof greenColor); // number
    console.log(greenColor); // 2
    // Any
    //---------------------------------------------
    var notSure = 4;
    console.log(typeof notSure); // number
    notSure = 'maybe a string instead';
    console.log(typeof notSure); // string
    notSure = false; // okay, definitely a boolean
    console.log(typeof notSure); // boolean
}
