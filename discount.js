/**
 * If you buy product upto 100, per product price will be: 100tk
 * 101-200: 90tk
 * more than 200: 70tk
 */

function discount(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity <= 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}

const total = discount(250);
console.log(total);
