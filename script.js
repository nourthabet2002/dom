let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName('plus-btn')
let quant=document.getElementsByClassName('Quant')
let minus_btn=document.getElementsByClassName('minus-btn')
let Item=document.getElementsByClassName('Item')
let prices=[1379,176,500]
let finalprice=document.getElementById('finalPrice')
let deletee=document.getElementsByClassName('delete')
for (let index = 0; index < heart_btn.length; index++) {
  
  heart_btn[index].addEventListener("click", function(){
    if(heart_btn[index].style.color==="red"){
      heart_btn[index].style.color="black"
    }
    else{
      heart_btn[index].style.color="red"
    }
  })
  plus_btn[index].addEventListener("click", function(){
    quant[index].value=Number(quant[index].value)+1
    finalprice.value=Number(finalprice.value)+prices[index]
  
  })
  minus_btn[index].addEventListener("click", function(){
    if (quant[index].value!=="0"){
      quant[index].value=Number(quant[index].value)-1
      finalprice.value=Number(finalprice.value)-prices[index] 
    }})
    deletee[index].addEventListener("click", function(){
       Item[index].style.display="none";
       finalprice.value=Number(finalprice.value)-prices[index]*Number(quant[index].value);
    })
}
