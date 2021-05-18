const menu = document.getElementById('btn-menu');
const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');
const li4 = document.getElementById('li4');
const body = document.getElementById('body');


/* MENU DESPLEGABLE */
menu.addEventListener('click', () => {
    document.getElementById('cambimenu').classList.toggle('menu-interno-activo');
    document.getElementById('body').classList.toggle('sinscroll');
});
li1.addEventListener('click', () => {
    document.getElementById('cambimenu').classList.toggle('menu-interno-activo');
    document.getElementById('body').classList.toggle('sinscroll');
});
li2.addEventListener('click', () => {
    document.getElementById('cambimenu').classList.toggle('menu-interno-activo');
    document.getElementById('body').classList.toggle('sinscroll');
});
li3.addEventListener('click', () => {
    document.getElementById('cambimenu').classList.toggle('menu-interno-activo');
    document.getElementById('body').classList.toggle('sinscroll');
});
li4.addEventListener('click', () => {
    document.getElementById('cambimenu').classList.toggle('menu-interno-activo');
    document.getElementById('body').classList.toggle('sinscroll');
});


/* window.body.addEventListener(scroll, function () {
    let scroll = document.getElementById('home');
    let posicion = scroll.getBoundingClientRect().top;
    console.log(posicion);
})



 */












