// Izarra Villareal CS 81 Javascript Assignment 3B Math Toolkit

// This toolkit provides a set of mathematical functions that can be used in various applications.
// Each function is designed to perform a specific mathematical operation.
// The functions are simple and can be easily integrated into larger projects.

// This function takes a number as input and returns its double.
// It is useful for calculations that require doubling a number, such as in financial applications or data processing.
// The function is straightforward and uses the multiplication operator to compute the double.
function double(n) {
  return n * 2;
}

console.log(double(5)); // Example usage of the double function

// This function takes a number as input and returns its square.
// It is useful for calculations that require squaring a number, such as in geometry or physics.
// The function is straightforward and uses the multiplication operator to compute the square.
function square(n) {
  return n * n;
}

console.log(square(5)); // Example usage of the square function

// This function takes a number as input and determines if it is even.
// It is useful for applications that require checking the parity of a number, such as in algorithms or data validation.
// The function uses the modulus operator to check if the number is divisible by 2, which indicates that it is even.
// If the number is even, it returns true; otherwise, it returns false.
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(5)); // Example usage of the isEven function

// This function takes a number as input and determines if it is odd.
// It is useful for applications that require checking the parity of a number, such as in algorithms or data validation.
// The function uses the modulus operator to check if the number is not divisible by 2, which indicates that it is odd.
// If the number is odd, it returns true; otherwise, it returns false.
function isOdd(n) {
  return n % 2 !== 0;
}

console.log(isOdd(5)); // Example usage of the isOdd function

// This function takes two numbers as input, multiplies them, and returns the result.
// It is useful for calculations that require multiplying two numbers, such as in financial applications or data processing.
// The function uses the multiplication operator to compute the product of the two numbers and returns the result.
function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 3)); // Example usage of the multiply function
