function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const input = parseInt(process.argv[2], 10);

if (Number.isNaN(input)) {
  console.log('No argument');
} else {
  console.log(factorial(input));
}
