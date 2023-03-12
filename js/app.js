const header = document.getElementById('header')

window.addEventListener('scroll', ()=>{
    const scroll = window.scrollY
    if(scroll>10){
        header.style.background = rgba(255, 255, 255, 0.589);
    }else{
        header.style.background = 'transparent'
    }
})