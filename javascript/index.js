const menu = document.getElementById('btn-menu');
const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');
const li4 = document.getElementById('li4');
const body = document.getElementById('body');

/* COMPROBAR EL SCROOL PARA EL NAVBAR */
const proyectos = document.getElementById('proyectos');
const home = document.getElementById('home');
const sobremi = document.getElementById('sobremi');
const contacto = document.getElementById('contacto');
/* CAMBIA EN EL A */
const li = document.querySelectorAll('.li');

let scroll1;/* SCROLL DE LA PANTALLA */

/* QUE POSICION DEL SCROLL DE LA PANTALLA ESTAN CADA ELEMENTO */
let home1;
let proyectos1;
let sobremi1;
let contacto1;

/* CONTROLAR EL SCROLL */
body.addEventListener('scroll', () => {
    scroll1 = body.scrollTop

    home1 = home.offsetTop;
    proyectos1 = proyectos.offsetTop;
    sobremi1 = sobremi.offsetTop;
    contacto1 = contacto.offsetTop;
    

    if(scroll1 >= home1 && scroll1 <= proyectos1) {
        /* console.log('home'); */
        controlarPosicion(0,1,2,3);
    }
    if(scroll1 >= proyectos1 && scroll1 <= sobremi1) {
        /* console.log('proyectos'); */
        controlarPosicion(1,0,2,3);
    }
    if(scroll1 >= sobremi1 && scroll1 <= contacto1) {
        /* console.log('sobremi'); */
        controlarPosicion(2,1,0,3);
    }
    if(scroll1 >= contacto1) {
        /* console.log('contacto'); */
        controlarPosicion(3,0,1,2);
    }


    /* console.log(`SCROLL = ${scroll1}`);

    console.log(`HOME = ${home1}`);
    console.log(`proyectos = ${proyectos1}`);
    console.log(`sobremi = ${sobremi1}`);
    console.log(`contacto = ${contacto1}`); */
});


/* PARA HACER CAMBIOS EN DE LA POSICCION */
function controlarPosicion(a1,a2,a3,a4) {
    li[`${a1}`].classList.add('lugar');
    li[`${a2}`].classList.remove('lugar');
    li[`${a3}`].classList.remove('lugar');
    li[`${a4}`].classList.remove('lugar');
}


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












