//Global variables
const link= document.querySelector('#link');
const theme= document.querySelector('.theme');
const zero=document.querySelector('.zero');
const one=document.querySelector('.one');
const two=document.querySelector('.two');
const three=document.querySelector('.three');
const four=document.querySelector('.four');
const five=document.querySelector('.five');
const six=document.querySelector('.six');
const seven=document.querySelector('.seven');
const eight=document.querySelector('.eight');
const nine=document.querySelector('.nine');
const upperNumber=document.querySelector('#lowerNumber');
const operator=document.querySelector('#operator');
const lowerNumber=document.querySelector('#lowerNumber');
// array to hold the first number of an operation
let firstNum=[];


//function and event listiner to change theme
function changeTheme(){
    let href=link.getAttribute('href');
    if (href=== 'styles.css'){
        link.setAttribute('href','styles2.css')
    }
    else if (href=== 'styles2.css'){
        link.setAttribute('href','styles.css')
    }
}

theme.addEventListener('click', changeTheme);

//event listiners to store every number in the firstNum array
//and display it on screen
zero.addEventListener('click',()=>{firstNum.push(0);
    lowerNumber.textContent=firstNum.join('')
});
one.addEventListener('click',()=>{firstNum.push(1);
    lowerNumber.textContent=firstNum.join('')
});
two.addEventListener('click',()=>{firstNum.push(2);
    lowerNumber.textContent=firstNum.join('')
});
three.addEventListener('click',()=>{firstNum.push(3);
    lowerNumber.textContent=firstNum.join('')
});
four.addEventListener('click',()=>{firstNum.push(4);
    lowerNumber.textContent=firstNum.join('')
});
five.addEventListener('click',()=>{firstNum.push(5);
    lowerNumber.textContent=firstNum.join('')
});
six.addEventListener('click',()=>{firstNum.push(6);
    lowerNumber.textContent=firstNum.join('')
});
seven.addEventListener('click',()=>{firstNum.push(7);
    lowerNumber.textContent=firstNum.join('')
});
eight.addEventListener('click',()=>{firstNum.push(8);
    lowerNumber.textContent=firstNum.join('')
});
nine.addEventListener('click',()=>{firstNum.push(9);
    lowerNumber.textContent=firstNum.join('')
});

