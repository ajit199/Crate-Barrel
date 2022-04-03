import cartItem from "../components/cartitems.js";
let items = document.getElementById("items");
let cartItems = JSON.parse(localStorage.getItem("cartItems"));
document.querySelector("#cartCount>span").innerText = cartItems.length;
function displayData(data) {
  items.innerHTML = "";
  data.forEach((item, index) => {
    items.innerHTML += cartItem(item, index);
  });
  method(data);
}
displayData(cartItems);
function method(arr) {
  let count = arr.map((item) => {
    return item.quantity;
  });
  let priceObj = {};
  let minus = document.querySelectorAll("#minus");
  let plus = document.querySelectorAll("#plus");
  let cart_quantity = document.querySelectorAll("#cart_quantity");
  let product_total = document.querySelectorAll("#product-total");
  let product_price = document.querySelectorAll("#product-price");
  let cartTotalPrice = 0;
  let finalTotal =
    +document.getElementById("shipping").innerText +
    +document.getElementById("tax").innerText;
  let dis = 0;
  for (let i = 0; i < cart_quantity.length; i++) {
    cart_quantity[i].value = count[i];
    product_total[i].innerText =
      +product_price[i].innerText.substring(1) * count[i];
    cartTotalPrice += +product_price[i].innerText.substring(1) * count[i];
    finalTotal += +product_price[i].innerText.substring(1) * count[i];
    document.getElementById("cartTotalPrice").innerText = cartTotalPrice;
    document.getElementById("finalTotal").innerText = finalTotal;
    minus[i].addEventListener("click", () => {
      count[i]--;
      cart_quantity[i].value = count[i];
      product_total[i].innerText =
        +product_price[i].innerText.substring(1) * count[i];
      cartTotalPrice -= +product_price[i].innerText.substring(1) * 1;
      finalTotal -= +product_price[i].innerText.substring(1) * 1;
      document.getElementById("cartTotalPrice").innerText = cartTotalPrice;
      document.getElementById("finalTotal").innerText = finalTotal;
      discount(finalTotal);
    });
    plus[i].addEventListener("click", () => {
      count[i]++;
      cart_quantity[i].value = count[i];
      product_total[i].innerText =
        +product_price[i].innerText.substring(1) * count[i];
      cartTotalPrice += +product_price[i].innerText.substring(1) * 1;
      finalTotal += +product_price[i].innerText.substring(1) * 1;
      document.getElementById("cartTotalPrice").innerText = cartTotalPrice;
      document.getElementById("finalTotal").innerText = finalTotal;
      discount(finalTotal);
    });
    discount(finalTotal);
  }

  function discount(total) {
    dis = total;
  }

  document.querySelector("#promo-code>button").addEventListener("click", () => {
    let discount = (10 / 100) * +dis;
    discount = Math.floor(discount);
    priceObj.discount = discount;
    let ans = +dis - discount;
    document.getElementById("finalTotal").innerText = ans;
    finalTotal -= discount;
  });

  let remove = document.querySelectorAll("#remove");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", (event) => {
      let element = event.path[5];
      let index = +event.path[5].children[0].value;
      delete arr[index];
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == undefined) {
          continue;
        }
        newArr.push(arr[i]);
      }
      localStorage.setItem("cartItems", JSON.stringify(newArr));
      let a = JSON.parse(localStorage.getItem("cartItems"));
      element.remove();
      document.querySelector("#cartCount>span").innerText = a.length;
      if (a.length == 0) {
        window.location.reload();
        document.querySelector("#cartCount>span").innerText = a.length;
      } else {
        displayData(a);
      }
    });
  }
  document.getElementById("checkout_btn").addEventListener("click", () => {
    priceObj["total"] = cartTotalPrice;
    priceObj["finalTotal"] = finalTotal;
    // console.log(priceObj);
    localStorage.setItem("totalPrice", JSON.stringify(priceObj));
    window.location.href = "../Rahul Gupta/shipping/shipping.html";
  });
}
