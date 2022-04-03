let totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
document.getElementById("cartTotal").innerText = `$${totalPrice.total}`;
document.getElementById("finalTotal").innerText = `$${totalPrice.finalTotal}`;
document.getElementById("discount").innerText = `-$${totalPrice.discount}`;
var paymentBtn = document.getElementById("betabtn");
paymentBtn.addEventListener("click", function () {
  var cardLength = document.getElementById("card").value;
  if (cardLength.length < 16 || cardLength.length > 16) {
    alert("Sorry! card number must be 16 digit only");
  } else {
    window.location.href = "../otp/otp.html";
  }

  var cardDetails = document.getElementById("saveCard");
});

var dropdown = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

//////////      PROMOTION CODE Part       /////////////

// var applyBtn = document.getElementById("pAbtn");
// console.log(applyBtn)

// applyBtn.addEventListener("click" , function(){

//   var promoCode = document.getElementById("pinp");
//   var code = promoCode.value;
//   console.log(code);

//   if(code == "masaiweb16")
//   {
//     alert("Congrats! you get flat 30% Off on your Purchase");
//   }
//   else{
//     alert("Invalid! Promocode");
//   }

// });
