const closeBtn = document.getElementById('closeBtn');
const menuBtn = document.getElementById('menuBtn');
const menu = document.querySelector('.menu');

console.log(menu)
menuBtn.addEventListener('click',(el) => {
    el.preventDefault()
    menu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
})