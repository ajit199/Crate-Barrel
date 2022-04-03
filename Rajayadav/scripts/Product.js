


const filterData=()=>{

  return `<div>FREE CURBSIDE PICKUP</div>
  <div>FILTER</div>
  <div><svg id="svg-icon-filter">
          <use></use>
       </svg>
  </div>
  <div>
      <select name="" id="order">
          <option value="lth">low to high</option>
          <option value="htl">high to low</option>

      </select>
  </div>`
}



let favProduct=JSON.parse(localStorage.getItem("favourite"))||[];

const append=(data,parent)=>{

  let purchasedata=JSON.parse(localStorage.getItem("purchaseData"))
  



    parent.innerHTML=null;

    data.map((el,index)=>{


    let div=document.createElement("div")

    let image=document.createElement("img")

      image.src=el.image;
      image.style.width="100%"
      image.style.height="380px"

      image.addEventListener("click",(index)=>{

              let arr=[];
              arr.push(el)
                localStorage.setItem("purchaseData",JSON.stringify(arr))
                location.href="../Ajit/detail.html"

         })

    let div1=document.createElement("div");

    let heart=document.createElement("h3")
       heart.innerText= "🤍"
       heart.style.cursor="pointer"
      //  wishlist things
      heart.addEventListener("click",(index)=>{
        if(heart.innerText=="🤍"){
          heart.innerText="❤️"
          favProduct.push(el)
          localStorage.setItem("favourite",JSON.stringify(favProduct))

        }else if(heart.innerText=="❤️"){
             heart.innerText= "🤍"
             favProduct.splice(index,1)
            
           
            localStorage.setItem("favourite",JSON.stringify(favProduct))
               
          
         }
       

      })
      let name=document.createElement("p");
       name.innerText=el.title
       div1.append(name,heart)

    div1.setAttribute("id","heart")
    let price=document.createElement("p");
    price.innerText=" $ "+el.price;

    div.append(image,div1,price)
    parent.append(div)


    })
   
}

export {append, filterData};