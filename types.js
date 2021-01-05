// The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
console.log('' + 1 + 0);

// The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
console.log('' - 1 + 0);
console.log(true + false);
console.log(6 / '3');
console.log('2' * '3');
console.log(4 + 5 + 'px');
console.log('$' + 4 + 5);
console.log('4' - 2);
console.log('4px' - 2);
console.log(7 / 0);

// The addition with a string appends the number 5 to the string.
console.log('  -9  ' + 5);

// The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
console.log('  -9  ' - 5);

// null becomes 0 after the numeric conversion.
console.log(null + 1);

// undefined becomes NaN after the numeric conversion.
console.log(undefined + 1);

// Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.
console.log(' \t \n' - 2);
