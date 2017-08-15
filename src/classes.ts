// Classes
//---------------------------------------------
{
  // Object-oriented class-based approach
  // Let’s take a look at a simple class-based example:
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return 'Hello, ' + this.greeting;
    }
  }

  // This class has three members: a property called greeting, a constructor, and a method greet.
  // You’ll notice that in the class when we refer to one of the members of the class we prepend this

  let greeter = new Greeter('world');
  let greetMessage = greeter.greet();
  console.log(greetMessage);
}
