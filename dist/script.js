//muda o header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Muda quando scrolla mais de 50 heigth do viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)