let hamburger = document.querySelector('#hamburger')
let menu_btns = document.querySelector('#menu-btns')

hamburger.addEventListener('click', function(){
    
    if(menu_btns.classList.contains('hide')){
        menu_btns.classList.remove('hide')
        menu_btns.classList.add('show')
    }else{
        menu_btns.classList.remove('show')
        menu_btns.classList.add('hide')
    }
})