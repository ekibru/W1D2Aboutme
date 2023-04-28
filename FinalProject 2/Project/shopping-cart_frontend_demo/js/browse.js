//  window.onload = function(){

document.getElementById("checkout").style.visibility = "hidden";
document.getElementById("checkoutMSG").style.visibility = "hidden";

const db = [
  { id: 1, name: "NodeJs", price: 1, image: "https://shorturl.at/lvwAR", stock: 10 },
  { id: 2, name: "Apple", price: 100, image: "https://shorturl.at/kSVW1", stock: 8 },
  { id: 3, name: "HP", price: 10, image: "https://shorturl.at/oxzG8", stock: 6 },
  { id: 4, name: "React Native", price: 100, image: "https://shorturl.at/jklAJ", stock: 7 },
];
const cart = new Map();

db.map((each) => {
  document.getElementById("tbodyProductList").innerHTML += `<tr>
    <td scope="col">${each.name}</td>
    <td scope="col" >${each.price}</td>
    <td scope="col"><img src="${each.image}" alt="ops..." width="70"></td>
    <td scope="col" id="stock-${each.id}">${each.stock}</td>
    <td scope="col"><button onclick="addTocart(${each.id})">Add</button></td>
        <tr>`;
});

// const sd = [];

function addTocart(id, count = 1) {
  if (cart.has(id)) {
    incrementQuantity(
      `quantity-${id}`,
      `totalPrice${id}`,
      `price${id}`,
      `price${each.id}`
    );
  } else {
    for (let each of db) {
      // console.log(each, id);
      let total = each.price; //assign each.price instead  of one(1) will show the current price instantly
      if (each.id === id) {
        // sd.push(each);
        document.getElementById("cartTable").innerHTML += `
          <tr>
            <td>${each.name}</td>
            <td id="price${each.id}">${each.price}</td>
            <td><span id="totalPrice${each.id}">${total}</span></td>
            <td>
              <button onclick="decrementQuantity('quantity-${each.id}', 'totalPrice${each.id}', 'price${each.id}',${each.id})">-</button>
              <span id="quantity-${each.id}">${count}</span>
              <button onclick="incrementQuantity('quantity-${each.id}', 'totalPrice${each.id}', 'price${each.id}', 'stock-${each.id}', ${each.id})">+</button>
            </td>
          </tr>
         `;
        cart.set(each.id, true);

        document.getElementById("checkout").style.visibility = "visible";

        // function call to to analyses and append total and go to controlPrice  -1 to decrease the stoke by 1
        controlPrice(id, -1, each.price);

        break;
      }
    }
  }
}

function incrementQuantity(quantityId, totalPriceId, priceId, stockId, id) {
  let quantityElem = document.getElementById(quantityId);
  let totalPriceElem = document.getElementById(totalPriceId);
  let priceElem = document.getElementById(priceId);
  let stockElem = document.getElementById(stockId);

  let quantity = parseInt(quantityElem.innerText);
  let price = parseInt(priceElem.innerText);
  let totalPrice = parseInt(totalPriceElem.innerText);
  let stock = parseInt(stockElem.innerText);

  if (quantity < stock) {
    quantity++;
    totalPrice = price * quantity;

    quantityElem.innerText = quantity;
    totalPriceElem.innerText = totalPrice;

    // function call to to analyses and append total and go to controlPrice  -1 to decrease the stoke by 1
    controlPrice(id, -1, totalPrice);
  }
}

function decrementQuantity(quantityId, totalPriceId, priceId, id) {
  let quantityElem = document.getElementById(quantityId);
  let totalPriceElem = document.getElementById(totalPriceId);
  let priceElem = document.getElementById(priceId);

  let quantity = parseInt(quantityElem.innerText);
  let price = parseInt(priceElem.innerText);
  let totalPrice = parseInt(totalPriceElem.innerText);

  if (quantity > 1) {
    quantity--;
    totalPrice = price * quantity;

    quantityElem.innerText = quantity;
    totalPriceElem.innerText = totalPrice;

    // function call to to analyses and append total and go to controlPrice 1 to increases the stock by 1
    controlPrice(id, 1, totalPrice);
  }
}

// checkout management
let cartArray = [
  { id: 1, name: "NodeJs", totalPrice: 0, price: 1, image: "https://shorturl.at/lvwAR", stock: 10 },
  { id: 2, name: "Apple", totalPrice: 0, price: 100, image: "https://shorturl.at/kSVW1", stock: 8 },
  { id: 3, name: "HP", totalPrice: 0, price: 10, image: "https://shorturl.at/oxzG8", stock: 6 },
  { id: 4, name: "React Native", totalPrice: 0, price: 100, image: "https://shorturl.at/jklAJ",stock: 7},
];

function checkOutTotal() {
  let sum = 0;
  for (let each of cartArray) {
    sum += each.totalPrice;
  }
  return sum;
}

function controlPrice(id, stock, totalPrice) {

  for (let each of cartArray) {
     count++;
    if (each.id === id) {
      each.totalPrice = totalPrice;
      each.stock += stock;
     
      break;
    }
  }
  document.getElementById("totalProductCost").innerHTML =checkOutTotal();
}

// checkout or Place order

function Checkout() {
  document.getElementById("checkout").style.display = "none";
  document.getElementById("cartTable").style.display = "none";
  document.getElementById("checkoutMSG").style.visibility = "visible";

  document.getElementById("tbodyProductList").innerHTML = "";

  cartArray.map((each) => {
    document.getElementById("tbodyProductList").innerHTML += `<tr>
      <td scope="col">${each.name}</td>
      <td scope="col" >${each.price}</td>
      <td scope="col"><img src="${each.image}" alt="ops..." width="70"></td>
      <td scope="col" id="stock-${each.id}">${each.stock}</td>
      <td scope="col"><button onclick="addTocart(${each.id})">Add</button></td>
          <tr>`;
  });
}
