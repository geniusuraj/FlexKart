

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
fetch("https://63f63abd59c944921f6ff45a.mockapi.io/products")
.then((res)=>{
 return res.json()
})
.then((actualData)=>{
  productData = actualData
    displayProduts(actualData)
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
        let buyarr=JSON.parse(localStorage.getItem("buy"))||[]
         
        let flag = false
        for(let i=0 ; i<buyarr.length ; i++){
            if(buyarr[i].id === el.id){
                flag = true;
                break;
            }
        }
        if(flag === true){
            swal("Already in Cart!", "Add Something else!", "warning")
        }else{
          buyarr.push(el)
            localStorage.setItem("buy",JSON.stringify(buyarr))
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

const dropdownReward = document.getElementById('reward-div1');
const rewardList = document.getElementById('reward-dropdown1');
const dropdownAccount = document.getElementById('my-account-div1');
const accountOption = document.getElementById('my-account-dropdown1');
const rewChev = document.getElementById('rew-chevron1');
const accChev = document.getElementById('acc-chevron1');

dropdownReward.addEventListener('click', () => {
  rewardList.classList.toggle('show-reward');
  rewChev.classList.toggle('rotate180');
  accountOption.classList.remove('show-reward');
});
dropdownAccount.addEventListener('click', () => {
  accountOption.classList.toggle('show-reward');
  rewardList.classList.remove('show-reward');
  accChev.classList.toggle('rotate180');
});

// JavaScript code for delaying hiding megamenu

let timeoutId;

const menuLinks = document.querySelectorAll('.shopping-category > ul > li > a');
const megamenus = document.querySelectorAll('.mega-menu-div');

for (let i = 0; i < menuLinks.length; i++) {
  const menuLink = menuLinks[i];
  const megamenu = megamenus[i];

  menuLink.addEventListener('mouseenter', function () {
    clearTimeout(timeoutId);
    closeAllMegamenus(); // hide any open megamenu before showing the current one
    megamenu.style.display = 'flex';
  });

  menuLink.addEventListener('mouseleave', function () {
    timeoutId = setTimeout(function () {
      megamenu.style.display = 'none';
    }, 500);
  });

  megamenu.addEventListener('mouseenter', function () {
    clearTimeout(timeoutId);
  });

  megamenu.addEventListener('mouseleave', function () {
    timeoutId = setTimeout(function () {
      megamenu.style.display = 'none';
    }, 500);
  });
}

function closeAllMegamenus() {
  for (let i = 0; i < megamenus.length; i++) {
    const megamenu = megamenus[i];
    megamenu.style.display = 'none';
  }
}

let bag = document.getElementById("bag");
bag.addEventListener("click",()=>{
  window.location.href = "./card.html"
})