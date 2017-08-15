// Used here to fix issue
// Cannot redeclare block-scoped variable
{
  // Boolean
  //---------------------------------------------
  let isDone: boolean = false;
  console.log(typeof isDone); // boolean

  // Number
  //---------------------------------------------
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  console.log(typeof decimal); // number

  // String
  //---------------------------------------------
  let color: string = 'blue';
  // color = true; // <=== Type 'true' is not assignable to type 'string'
  console.log(typeof color); // string

  // We can also use template strings, which can span multiple lines and have embedded expressions
  let fullName: string = `Palash Mondal`;
  let sentence: string = `Hello, my name is ${fullName}`;
  console.log(sentence);

  // Array
  //---------------------------------------------
  let list: number[] = [1, 2, 3];
  console.log(typeof list); // `object` in javascript code

  // The second way uses a generic array type, Array<elemType>:
  let moreList: Array<number> = [1, 2, 3];
  console.log(typeof moreList); // `object` in javascript code

  // Enum
  //---------------------------------------------
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
  }
  let greenColor: Color = Color.Green;
  console.log(typeof greenColor); // number
  console.log(greenColor); // 2

  // Any
  //---------------------------------------------
  let notSure: any = 4;
  console.log(typeof notSure); // number
  notSure = 'maybe a string instead';
  console.log(typeof notSure); // string
  notSure = false; // okay, definitely a boolean
  console.log(typeof notSure); // boolean
}
