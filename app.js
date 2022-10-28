//Global variables
const link= document.querySelector('#link');
const theme= document.querySelector('.theme');


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