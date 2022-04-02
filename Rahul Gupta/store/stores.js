var serviceArr = [

  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-71-01?$web_store_tile_md$",
    name : "CB2 Scottsdale",
    city: "Scottsdale, AZ",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-53-01?$web_store_tile_md$",
    name : "CB2 San Franscisco",
    city: "San Franscisco, CA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-55-01?$web_store_tile_md$",
    name : "CB2 Barkeley",
    city: "Barkeley, CA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-52-01?$web_store_tile_md$",
    name : "CB2 LOS Angeles",
    city: "Los Angeles, CA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-73-01?$web_store_tile_md$",
    name : "CB2 San Diego",
    city: "San Diego, CA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-69-01?$web_store_tile_md$",
    name : "CB2 COsta Mesa",
    city: "Costa Mesa, CA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-64-01?$web_store_tile_md$",
    name : "CB2 Denver",
    city: "Denver, CO",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-56-01?$web_store_tile_md$",
    name : "CB2 Miami Beach",
    city: "Miami Beach, FL",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-74-01?$web_store_tile_md$",
    name : "CB2 Atlanta",
    city: "Atlanta, GA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-118-01?$web_store_tile_md$",
    name : "CB2 Outlet At Naperville",
    city: "Naperville , IL",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-123-01?$web_store_tile_md$",
    name : "CB2 Chicago",
    city: "Chicago, IL",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-67-01?$web_store_tile_md$",
    name : "CB2 Boston",
    city: "Boston, MA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-66-01?$web_store_tile_md$",
    name : "Minneapolis",
    city: "Minneapolis, CA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-70-01?$web_store_tile_md$",
    name : "CB2 Paramus",
    city: "Paramus, NJ",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-51-01?$web_store_tile_md$",
    name : "CB2 Saho",
    city: "New York , NY",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-65-01?$web_store_tile_md$",
    name : "CB2 EastSide",
    city: "New York, NY",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-54-01?$web_store_tile_md$",
    name : "CB2 Philadelphia",
    city: "Phildelphia, PA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-68-01?$web_store_tile_md$",
    name : "CB2 Austin",
    city: "Austin, TX",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-62-01?$web_store_tile_md$",
    name : "CB2 Dalls",
    city: "Dallas, TX",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-60-01?$web_store_tile_md$",
    name : "CB2 Houston",
    city: "Houston, TX",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-78-01?$web_store_tile_md$",
    name : "CB2 Tysons Galleria - Now Open",
    city: "McLean, VA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-58-01?$web_store_tile_md$",
    name : "CB2 Seattle",
    city: "Seattle, WA",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-59-01?$web_store_tile_md$",
    name : "CB2 Washington, DC",
    city: "Washington, DC",
  },
  
  {
    image : "https://cb2.scene7.com/is/image/CB2/store-tile-blank/$web_store_tile_md$/220329052741/store-tile-blank.jpg",
    name : "",
    city: "",
  },
  
  ]
  
  localStorage.setItem("stores" , JSON.stringify(serviceArr));
  
    var serviceArr = JSON.parse(localStorage.getItem("stores"));
  
    console.log(serviceArr)
  
    var papaji = document.getElementById("papadiv")
  
    serviceArr.map((elem) =>{
  
      var div1 = document.createElement("div");
  
      var image = document.createElement("img");
      image.src = elem.image;
      image.setAttribute("id","locimg");
  
      var name = document.createElement("h3")
      name.innerText = elem.name;

      // var anchor = document.createElement("a");
      // anchor.append = name;
  
      var city = document.createElement("p")
      city.innerText = elem.city;
    
      div1.append(image,name,city);
  
      papaji.append(div1);
  
    })