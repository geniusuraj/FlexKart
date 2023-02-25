

let AppendSection = document.getElementById("append")
let lastScrol = window.scrollY;

let productData =[] ;
let select = document.getElementById("select");
select.addEventListener("change",()=>{
  let filtered = productData.filter((el)=>{
    if(el.brand === select.value && el.type == "men"){
      return true;
    }else if(select.value == "Brand"){
      displayProduts(actualData.product)
    }
    else{
      return false;
    }
  })
  displayProduts(filtered)
  console.log(filtered)
})

fetch("https://63f63abd59c944921f6ff45a.mockapi.io/flexcart/product")
.then((res)=>{
 return res.json()
})
.then((actualData)=>{
  productData = actualData.product
    displayProduts(actualData.product)
})
.catch((error)=>{
    console.log(error)
})




function displayProduts(data){
  AppendSection.innerHTML = null
  data.forEach(el => {
    if(el.type === "men"){
       
      let card = document.createElement("div");
      card.setAttribute("id","card");

      let imgDiv = document.createElement("div");
      imgDiv.setAttribute("id","imgDiv");

      let image = document.createElement("img");
      image.setAttribute("src",el.src);

      let title = document.createElement("h4")
      title.setAttribute("id","title")
      title.innerText = el.title;

      let brand = document.createElement("h4");
      brand.setAttribute("id","brand")
      brand.innerText = el.brand

      let discription =document.createElement("p");
      discription.setAttribute("id","discription")
      discription.innerText = el.discription
      


      let price = document.createElement("h3");
      price.setAttribute("id","price")
      price.innerText = "₹" + el.price;
      

      let button = document.createElement("button");
      button.setAttribute("id","button")
      button.innerText = "ADD TO CARD";

      button.addEventListener("click",()=>{
        let CartData = JSON.parse(localStorage.getItem("cart")) || []
         
        let flag = false
        for(let i=0 ; i<CartData.length ; i++){
            if(CartData[i].id === el.id){
                flag = true;
                break;
            }
        }
        if(flag === true){
            swal("Already in Cart!", "Add Something else!", "warning")
        }else{
            CartData.push(el)
            localStorage.setItem("cart",JSON.stringify(CartData))
            swal("Successfully Added to Cart!", "See More!", "success")
        }

      })

      imgDiv.append(image)
      card.append(imgDiv,title,brand,discription,price,button)
      AppendSection.append(card)
    }
  });
}


let high = document.getElementById("high");
high.addEventListener("click",()=>{
  let highData = productData.sort((a,b)=>{
    return (b.price - a.price)
    
  })
  displayProduts(highData)
})



let low = document.getElementById("low")

low.addEventListener("click",()=>{
  let lowData = productData.sort((a,b)=>{
    return (a.price - b.price)
    
  })
  displayProduts(lowData)
})


