export function showMeMenu() {
   const burger = document.getElementById('burger');
   const burgerMenu = document.querySelector('.nav-mobile')
   burger.addEventListener('click', function() {
     burgerMenu.classList.add('active')
     console.log(this)
   })
}
