const burger = document.querySelector('.burger');
burger.addEventListener('click', toggleMenu);
function toggleMenu() {
    document.querySelector('.sidemenu').classList.toggle('toggle');
}

document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.sidemenu').classList.remove('toggle');
})