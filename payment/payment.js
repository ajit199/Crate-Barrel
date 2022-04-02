
var paymentBtn = document.getElementById("betabtn");

paymentBtn.addEventListener("click" , function(){

  var cardLength = document.getElementById("card").value;

  if(cardLength.length < 16 || cardLength.length > 16)
  {
    alert("Sorry! card number must be 16 digit only");
  }


  var cardDetails = document.getElementById("saveCard");
  

});



//   var found = false;

//   var cardNum = document.getElementById("card").value;

//   var expiry = document.getElementById("expiry").value;

//   var securityCode = document.getElementById("code").value;

//   var detailsArr = []


// const cardData = () => {

//   if(cardNum == true && expiry == true && securityCode == true)
//   {
//      detailsArr.push(cardNum);
//      detailsArr.push(expiry);
//      detailsArr.push(securityCode)

//      console.log(detailsArr)
//   }

// }

var dropdown = document.getElementsByClassName("dropdown");
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
};



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

