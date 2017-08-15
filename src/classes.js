// Classes
//---------------------------------------------
{
    // Object-oriented class-based approach
    // Let’s take a look at a simple class-based example:
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return 'Hello, ' + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter('world');
    var greetMessage = greeter.greet();
    console.log(greetMessage);
}
