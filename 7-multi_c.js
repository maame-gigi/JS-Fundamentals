const n = parseInt(process.argv[2], 10);

if (Number.isNaN(n)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < n; i++) console.log('C is fun');
}
