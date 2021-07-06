function ocultar(){
var ancla = document.getElementsByClassName ('menu-enlace');
for(var i = 0; i < ancla.length; i++){
    ancla[i].classList.toggle ('ocultar');
}}