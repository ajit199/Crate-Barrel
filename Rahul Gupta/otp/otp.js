
  var shippingDetails = JSON.parse(localStorage.getItem("shipping"));
  console.log(shippingDetails[shippingDetails.length-1].phone);
   
  var num =(shippingDetails[shippingDetails.length-1].phone);
  console.log(num , typeof(num))

  var bag = "";

  for(var i = num.length-1 ; i>=6 ; i--)
  {
    bag = bag + num[i];
  }

  var x = bag.split("");
  var y = x.reverse();
  var received = y.join("")

  console.log(received);


  ////////   OTP Varification   /////////


  var btn = document.getElementById("btn");

  btn.addEventListener("click" , function(){

    var otp = document.getElementById("otp").value;

    console.log(otp)

    if(received == otp && received != "")
    {
      alert("Congrats! otp validation Successful");
  
      location.href = "success.html"
    }
    else if(received != ""){
      alert("Oops! invalid otp")
    }
  })

  


