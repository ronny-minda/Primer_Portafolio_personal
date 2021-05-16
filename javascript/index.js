const menu = document.getElementById('btn-menu');
/* const hover1 = document.getElementById('hover1');
const hover2 = document.getElementById('hover2');
const hover3 = document.getElementById('hover3'); */

var hover;



/* MENU DESPLEGABLE */
menu.addEventListener('click', () => {
    document.getElementById('cambimenu').classList.toggle('menu-interno-activo');
    document.getElementById('body').classList.toggle('body-sinscroll');
});


/* 
hover1.addEventListener("mouseover",(e)=>{
    document.getElementById('menu').classList.toggle('menu-activo');
});
hover1.addEventListener("mouseout",(e)=>{
    alert("hover1 salida");
});


hover2.addEventListener("mouseover",(e)=>{
    alert("hove2 entrada");
});
hover2.addEventListener("mouseout",(e)=>{
    alert("hover2 salida");
});
 */



/* hover3.addEventListener("mouseover",(e)=>{
    doument.getElementById('cambio3').classList.toggle('prende');

});
hover3.addEventListener("mouseout",(e)=>{
    document.getElementById('cambio3').classList.toggle('prende');
}); */