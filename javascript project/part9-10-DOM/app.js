// add p tag with red text that say "hey im a red"
let para=document.createElement('p');
para.innerText='hi im a red';
para.style.color='red';

document.body.append(para);
// add h3 tag with blue text that say "hey im a blue"
let heading=document.createElement('h3');
heading.innerText='hi im a blue';
heading.style.color='blue';

document.body.append(heading);

// create div,and add heading and paragraph inside it
let div=document.createElement('div');
let h1=document.createElement('h1');
let p= document.createElement('p');
h1.innerText='hi im in div';
p.innerText='hi im a pars div';

div.append(h1);
div.append(p);
div.classList.add('box')
document.body.append(div);
// Assignment Que

// Qs5.Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold
let para2=document.createElement('p');
para2.innerHTML='Apna College <b>Delta</b> Practice';
// para2.style.color='red';

document.body.append(para2);

// Qs4.Create an h1 element on the page and set its text to“c” underlined.Change its color to purple
let heading1=document.createElement('h1');
heading1.innerHTML='<u>DOM Practice</u>';
heading1.style.color='purple';

document.body.append(heading1);

// Qs3.Access the btn using the querySelector and button id.
// Change the button backgroundcolor to blue and text color to white
let btn=document.querySelector('#btn');
btn.style.backgroundColor='blue';
btn.style.color='white';

// PracticeQuestionsQs1.Create a new input and button element on the page using JavaScript only.
// Set the text of button to “Clickme”;

// Qs2.Addfollowing attributes to the element:
// -Change placeholder value of input to “username”-Change the id of button to “btn”

let input=document.createElement('input');  //step1
input.setAttribute('type','text');
input.setAttribute('placeholder','username');           //step2 style,properties,attributes,functionality
input.setAttribute('id','name');//step 3 add in html

document.body.append(input);
let button=document.createElement('button');

button.innerText='Clickme';
button.setAttribute('id','btn');

document.body.append(button);
