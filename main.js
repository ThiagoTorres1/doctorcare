/*
    O javascript é capaz de perceber movimentos na página
    onscroll - Atributo="onScroll()"
        on + ação que eu quero que aconteça, nesse caso scroll;
        ="Recebe um parâmentro, nesse caso minha função e a executa"
*/

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targeLine = scrollY + innerHeight / 2
    // Verificar se a seção passou da linha
    // Quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetline = targeLine >= sectionTop
    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt <= targeLine
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    let whenScrolling = scrollY > 0 
    if(whenScrolling) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    let whenScrollingB = scrollY > 500 
    if(whenScrollingB) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}
 
function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home,
    #home img,
    #home #background,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);
