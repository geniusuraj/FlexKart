

let AppendSection = document.getElementById("append")
let lastScrol = window.scrollY;

let productData =[] ;
fetch("https://63f63abd59c944921f6ff45a.mockapi.io/flexcart/product")
.then((res)=>{
 return res.json()
})
.then((actualData)=>{
   
    displayProduts(actualData.product)
})
.catch((error)=>{
    console.log(error)
})


function displayProduts(data){
  data.forEach(el => {
    if(el.type === "women"){
       
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
      brand.innerText = "API MAi NHI HAI ABhi"

      let discription = document.createElement("p");
      discription.setAttribute("id","discription")
      discription.innerText = el.discription
      


      let price = document.createElement("h3");
      price.setAttribute("id","price")
      price.innerText = "₹" + el.price;
      

      let button = document.createElement("button");
      button.setAttribute("id","button")
      button.innerText = "ADD TO CARD";

      button.addEventListener("click",()=>{
        

      })

      imgDiv.append(image)
      card.append(imgDiv,title,brand,discription,price,button)
      AppendSection.append(card)
    }
  });
}


