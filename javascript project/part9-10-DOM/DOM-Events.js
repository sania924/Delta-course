let btn=document.querySelector('button');
btn.addEventListener("click",function()
{
    let heading=document.querySelector('h2');
    let textRandom=randon();
    heading.innerText=textRandom;
    let box=document.querySelector('div');
box.style.backgroundColor = textRandom;
});

// heading.style.color='red';



btn.innerText="click me";


function randon(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
  let color=`rgb(${r},${g},${b})`;
return color;
}