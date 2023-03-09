const buttonOpen = document.querySelector('#open')
const buttonClose = document.querySelector('#close')
const contentRotate = document.querySelector('.container')
const menuContentRotate = document.querySelector('.circle-container')
const navBar = document.querySelector('nav')


buttonOpen.addEventListener('click', ()=>{
    contentRotate.classList.add('show-nav')
    menuContentRotate.classList.add('show-nav')
    navBar.classList.add('show-nav')
})

buttonClose.addEventListener('click', ()=>{
    contentRotate.classList.remove('show-nav')
    menuContentRotate.classList.remove('show-nav')
    navBar.classList.remove('show-nav')
})

