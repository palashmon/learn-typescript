// Import Module from module-b
//---------------------------------------------

// Import the module here
import { Point, Person } from '../src/module-b';

// We can now use the Point class from module-b
let point = new Point(1, 2);
point.draw();

// We can also access the Person class from module-b
let person = new Person('Palash', 'Mondal');
