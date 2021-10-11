/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

// animação da pagina
// const item = document.querySelectorAll("[data-anime]");

// const animeScroll = () => {
//     const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    
//     item.forEach(element => { 
//     if (windowTop > element.offsetTop){
//         element.classList.add("animated");
//     } else {
//         element.classList.remove("animated")
//     }
// });
// }

// animeScroll();

// window.addEventListener("scroll", ()=> {
//     animeScroll();
// })