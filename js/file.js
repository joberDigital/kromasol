const enlace= './index.html';
const contenedor = document.querySelector('.headerPrincipal');

const container = document.createElement('div');
const boton = document.createElement('a');
const  logo= document.createElement('div');

container.classList.add('container');
    logo.classList.add('logo');
    boton.classList.add('headerPrincipal-titulo');
    
    boton.setAttribute('href',enlace);
    boton.innerHTML="HOME";
    logo.appendChild(boton);
    container.appendChild(logo);
contenedor.appendChild(container);

funcion2()

var array={
  10:"10%",
  15:"15%",
  20:"20%",
  30:"25%",
  35:"30%",
  30:"35%",
  40:"40%",
  45:"45%",
  50:"50%",
  55:"55%",
  60:"60%",
  65:"65%",
  70:"70%",
  75:"75%",
  80:"80%",
  85:"85%",
  90:"90%",
  95:"95%",
  100:"100%",
}
 var contador=0
let bandera=false
function funcion() {
    contador+=1
    console.log("numero1"+ contador)
    boton.style.opacity=aparecer(contador)
if(contador==50){
    boton.style.margin= "40px 20px 40px 20px";
	boton.style.width="80%";
}
    if(contador==100){
        boton.style.margin= "45px 20px 40px 20px";
        boton.style.width="80%";
    contador=0}
  }
  function aparecer(contador) {
if(array[contador]){
 return   array[contador]
   }
  }
  function funcion2(){
setInterval(funcion,30)
  } 
