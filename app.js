const closeBtn = document.getElementById('closeBtn');
const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('.menu');
const blur = document.querySelector('.blur');
const body = document.querySelector('body');

menuBtn.addEventListener('click',(el) => {
    el.preventDefault()
    menu.classList.add('active')
    blur.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    blur.style.display = 'none'
})
body.addEventListener('click', (event) => {
    if(!menuBtn.contains(event.target) && !menu.contains(event.target)){
        menu.classList.remove('active')
        blur.style.display = 'none'
    }
})