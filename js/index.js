let btn = document.querySelector('#primaryBtn')
let ul = document.querySelector('.primaryUl')

console.log(btn)
console.log(ul)

function toggleMenu() {
    btn.classList.toggle('open')
    ul.classList.toggle('open')
}

btn.onclick = toggleMenu;

