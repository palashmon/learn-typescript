// Arrow Functions
//---------------------------------------------
{
  // In JavaScript, we write a function like
  let buildName = function(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName;
  };

  // and then call it like
  let fullname = buildName('Palash', 'Mondal');
  console.log(fullname);
}

{
  // In TypeScript, we can use arrow function like
  let buildName = (firstName, lastName) => `Hello, ${firstName} ${lastName}`;

  // and then call it like
  let fullname = buildName('Wes', 'Bos');
  console.log(fullname);
}
