let WomenMain = document.getElementById("WomenMain")

WomenMain.innerHTML = `
<div class="Women1">
       
       <p class="first">Filters</p>
       <hr>
       <p>New Arrivals</p>
       <hr>
       <p>Maternity Clothing</p>
       <hr>
       <p>Petite Clothing</p>
       <hr>
       <p>Plus Size Clothing</p>
       <hr>
       <p>Shoes</p>
       <hr>
       <p>Women's Clothing</p>
       <hr>
       <p>Petite Clothing</p>
       <hr>

       <p class="first">Featured Shops</p>
       <hr>
       <p>Breast Cancer Awareness</p>
       <hr>
       <p>Contemporary</p>
       <hr>
       <p>Designer</p>
       <hr>
       <p>Family Moments</p>
       <hr>
       <p>Fan Gear</p>
       <hr>
       <p>Statements</p>
       <hr>

     </div>
     <div class="Women2">
        
       <div class="image">
        <img src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_women_1226_fh_1_m?$DWP_PHOTO$" alt="" class="belkIMG">
       </div>


       <div class="shopTops">
        <div>
            <img src="https://belk.scene7.com/is/image/Belk/wk48_2022_chan_women_1226_3c_1?$DWP_PHOTO$" alt="">
        </div>
        <div>
            <img src="https://belk.scene7.com/is/image/Belk/wk40_2022_chan_women_1031_3c_2?$DWP_PHOTO$" alt="">
        </div>
        <div>
            <img src="https://belk.scene7.com/is/image/Belk/wk40_2022_chan_women_1031_3c_3?$DWP_PHOTO$" alt="">
        </div>
         
    

     
        <div>
            <img src="https://belk.scene7.com/is/image/Belk/wk03_2023_chan_women_0213_3c_4?$DWP_PHOTO$" alt="">
        </div>
        <div>
            <img src="https://belk.scene7.com/is/image/Belk/wk03_2023_chan_women_0213_3c_5?$DWP_PHOTO$" alt="">
        </div>
        <div>
            <img src="https://belk.scene7.com/is/image/Belk/wk40_2022_chan_women_1031_3c_6?$DWP_PHOTO$" alt="">
        </div>
         
   
     
      
    
     </div>
     <div class="style">
       <img src="https://belk.scene7.com/is/image/Belk/wk50_2023_chan_women_0109_fh_1?$DWP_PHOTO$" alt="">
    </div>

    <div class="style2">
        <img src="https://belk.scene7.com/is/image/Belk/wk04_2023_SPEC_lovefordenim_fp_fh_2?$DWP_PHOTO$" alt="">
     </div>

`

fetch("http://127.0.0.1:9090/Product")
.then((res)=>{
 return res.json()
})
.then((actualData)=>{
    console.log(actualData)
})
.catch((error)=>{
    console.log(error)
})