
 var detailsShippingKa = JSON.parse(localStorage.getItem("shipping"));

 const storeDetails = () => {

  var Dobj = {
     fname : document.getElementById("fname").value,
     lname : document.getElementById("lname").value,
     address : document.getElementById("address").value,
     zipCode : document.getElementById("zip").value,
     city : document.getElementById("city").value,
     state : document.getElementById("state").value,
     phone : document.getElementById("number").value,
   };

 var shippingDetails = []

 shippingDetails.push(Dobj)



 localStorage.setItem("shipping" , JSON.stringify("shippingDetails"))

    console.log(shippingDetails);
 }

  storeDetails();