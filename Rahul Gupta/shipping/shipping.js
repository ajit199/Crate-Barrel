const storeDetails = () => {

   var fname = document.getElementById("fname").value;
   var lname = document.getElementById("lname").value;
   var address = document.getElementById("address").value;
   var zipCode = document.getElementById("zip").value;
   var city = document.getElementById("city").value;
   var state = document.getElementById("state").value;
   var phone = document.getElementById("number").value;
 
  var Dobj = {
     fname : fname,
     lname : lname,
     address : address,
     zipCode : zipCode,
     city : city,
     state : state,
     phone : phone,
   };
 
 // var shippingDetails = [];
 
 var shippingDetails = JSON.parse(localStorage.getItem("shipping")) || [];
 
 shippingDetails.push(Dobj)
 
 // console.log("Details :" + shippingDetails);
 
 localStorage.setItem("shipping" , JSON.stringify(shippingDetails))
 
 
 }
 
 storeDetails();
 
 console.log(shippingDetails)