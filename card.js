



// cart item

let buyarr=JSON.parse(localStorage.getItem("buy"))||[]
let cont=document.getElementById("order-container")
let totalbill=document.querySelector(".total-price")
let totalbil=document.querySelector(".total-prce")
let totalitems=document.getElementById("total-items")
let totalprice=buyarr.reduce((acc,item)=>{
  return acc+item.price
},0)

display(buyarr)


function display(dataArr){
  cont.innerHTML=""
  dataArr.forEach((element,index) => {
    let div=document.createElement("div")
    div.setAttribute("class","cart-cards")

    let imagediv=document.createElement("div")
    imagediv.setAttribute("class","image-div")

    let image=document.createElement("img")
    image.setAttribute("src",element.src)
    imagediv.append(image)

    let Contentdiv=document.createElement("div")
    Contentdiv.setAttribute("class","content-div")

    let title=document.createElement("h3")
    title.innerText=element.title

    let brand=document.createElement("h3")
    brand.innerText=element.brand

    let desc=document.createElement("p")
    desc.setAttribute("id","discription")
    desc.innerText=element.discription


    let price=document.createElement("p")
    price.setAttribute("id","prices")
    price.innerText= "Rs" + element.price

   Contentdiv.append(title,brand,desc,price)

   let changerdiv=document.createElement("div")
   changerdiv.setAttribute("class","changer-div")

    let quantity=document.createElement("span")
    quantity.innerText=element.quantity

    let plus=document.createElement("button")
    plus.setAttribute("class","plusminus")
    plus.innerText='+'
    plus.addEventListener("click",()=>{
      element.quantity++
      increase(element.price)
      localStorage.setItem("buy",JSON.stringify(buyarr))
      display(buyarr)
      
    })
    let minus=document.createElement("button")
    minus.setAttribute("class","plusminus")
    minus.innerText='-'
    minus.addEventListener("click",()=>{
      if(element.quantity!=1){
        element.quantity--
       dec(element.price)
      localStorage.setItem("buy",JSON.stringify(buyarr))
      display(buyarr)
      }
    })
    let del=document.createElement("button")
    del.setAttribute("class","remove-btn")
    del.innerText="REMOVE"
    del.addEventListener("click",()=>{
    
      dlt(element,index)
      alert("Successfully Remove Form Cart!", "See More!", "success")
    })
    changerdiv.append(plus,quantity,minus,del)
    div.append(imagediv,Contentdiv,changerdiv)
    cont.append(div)
    totalitems.innerText=buyarr.length
  });
  total(totalprice)
}



total(totalprice)
function total(total){
 totalbill.innerText=`Rs ${total}`
 totalbil.innerText=`Rs ${total}`

}

function dlt(element,index){
  buyarr.splice(index,1)
  localStorage.setItem("buy",JSON.stringify(buyarr))
  let newprice=totalprice-element.price
  total(newprice)
  display(buyarr)
  window.location.href="card.html"
}

function increase(price){
let newprice=totalprice+price
totalprice=newprice
total(newprice)
}
function dec(price){
let newprice=totalprice-price
totalprice=newprice
total(newprice)
}

let checkout=document.getElementById("checkout")

checkout.addEventListener("click",()=>{
  if(buyarr.length==0){
    swal("Your Cart is Empty","Add Something to Cart","warning").then(function(){
      window.location.href="index.html"
    })
  }
  else if(buyarr.length>0){
  window.location.href="payment.html"
  }
})