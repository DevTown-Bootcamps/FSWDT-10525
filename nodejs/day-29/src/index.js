const greet = (name = 'World') => {
  console.log(`Hello, ${name}!`);
};

greet();        // Default value
greet('Anshul'); // Custom value
