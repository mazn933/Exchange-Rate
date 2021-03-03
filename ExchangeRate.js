const btn=document.querySelector('button')
const result=document.querySelector('.result');
const op1=document.querySelector('.opt1');
const op2=document.querySelector('.opt2');
const input=document.querySelector('input');
const secondContainer=document.querySelector('.second-container');
const cv=document.querySelector('.cv')

btn.addEventListener('click',function(){
  let v1=op1.value;
  let v2=op2.value;

  fetch(`https://v6.exchangerate-api.com/v6/cebc5d4da4fa77163291918e/latest/${v1}`)
 .then(response =>
   response.json())
  .then(data => {Change(data.conversion_rates);
  console.log(data.conversion_rates)}).catch(err =>console.log(`something went wrong ${err}`))

  function Change(dt){

  let rate=input.value;
  console.log(rate)
  let f=dt[`${v2}`]*rate;
  f=f.toFixed(3);
  cv.innerHTML=`${v1} conversion to ${v2}`
  
  result.innerText=`${rate} ${v1} = ${f} ${v2}`;
  input.addEventListener('click',function(){
    let rte=input.value;
    let f=dt[`${v2}`]*rte;
    result.innerHTML=`${rte} ${v1} = ${f} ${v2}`;
    

  })
}
 
})

window.addEventListener('load',function(){

  fetch(`https://v6.exchangerate-api.com/v6/cebc5d4da4fa77163291918e/latest/USD`)
 .then(response =>
   response.json())
  .then(data => {GettingData(data.conversion_rates)
  console.log(data.conversion_rates)}).catch(err =>console.log(`something went wrong ${err}`));
  function GettingData(dt){
  secondContainer.innerHTML=`  
<p class='USD-number'>${dt['USD'].toFixed(2)}</p> 
<p class='EUR-number'>${dt['EUR'].toFixed(2)}</p>
<p class='GBP-number'>${dt['GBP'].toFixed(2)}</p>
<p class='JPY-number'>${dt['JPY'].toFixed(2)}</p>
<p class='IQD-number'>${dt['IQD'].toFixed(2)}</p>`}
})
