const raw = process.argv[2];               
const n = parseInt(raw, 10);              
if (!Number.isNaN(n)) {
  console.log(`My number: ${n}`);
} else {
  console.log('Not a number');
}
