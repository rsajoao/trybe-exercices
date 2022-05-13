const generateDiscount = (percentage) => {
  return (total) => total * percentage;
}

// const discount20percent = generateDiscount(0.2);
// const discount10percent = generateDiscount(0.1);

const discount20reais = (total) => 20.0;

const checkout = (items, callback) => {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  total -= callback(total);
  return total;
}

const items = [5, 10, 15, 20];

let total = checkout(items, generateDiscount(0.5));
console.log(total);