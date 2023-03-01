let header = document.querySelector('header')

window.addEventListener('scroll', ()=> {
    header.classList.toggle('sticky', window.scrollY > 0)
})
let menu = document.querySelector(".nav")
let navBar = document.querySelector("#menu-bar")

navBar.addEventListener('click', () =>{
    menu.classList.toggle('active')
    navBar.classList.toggle('fa-times')
})

window.onscroll = () => {
      menu.classList.remove('active')
      navBar.classList.remove('fa-times')
}
