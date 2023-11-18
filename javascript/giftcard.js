//juego
let juego = confirm ('¿Querés ganar un premio?')
let respuesta = true;  

if (juego == respuesta)
{      alert ("Responde las siguientes preguntas")
    console.log ("empieza el juego")
}
else {  
    alert("Seguí navegando")
    console.log ("no participas")
} 




//1er pregunta
let pregunta1 = prompt ('¿El masaje ayuda a disminuir el estrés?')

if (pregunta1 == "si")
{
    alert ("Muy bien!!")
}

else 
{
    alert("😢😢😢")
    
}

//2da pregunta
let pregunta2 = prompt ('¿Cuál es el termino para referirse a la energia que produce vida?')
function answer (valor1, valor2) {
    let total= valor1 + valor2;
    return total
}

let suma = answer ("bio","energia")

console.log (suma)
if (pregunta2 == suma)
{
    alert("Excelente!!")
}
else
{
    alert("😭😭💔💔 ")
}

//solucion
let premio = alert ("Llegaste al final👏👏")

if (pregunta1 == "si" && pregunta2 == suma)
{
    alert ("🎉Felicidades🎊 ganaste un 10% de dto en tu próxima compra")
}
else
{
    alert("❌Respuestas incorrectas ❌")
}





const btn_1= document.getElementById ("btn-1")
btn_1.addEventListener ('click', () => {
    alert('Compraste combo 1. ¡Gracias por tu compra!')
})
    
const btn_2= document.getElementById ("btn-2")
btn_2.addEventListener ('click', () => {
    alert('Compraste combo 2. ¡Gracias por tu compra!')
})
    
const btn_3= document.getElementById ("btn-3")
btn_3.addEventListener ('click', () => {
    alert('Compraste combo 3. ¡Gracias por tu compra!')
})

const btn_4= document.getElementById ("btn-4")
btn_4.addEventListener ('click', () => {
    alert('Compraste combo 4. ¡Gracias por tu compra!')
})
    
const btn_5= document.getElementById ("btn-5")
btn_5.addEventListener ('click', () => {
    alert('Compraste combo 5. ¡Gracias por tu compra!')
})
    
const btn_6= document.getElementById ("btn-6")
btn_6.addEventListener ('click', () => {
    alert('Compraste combo 6. ¡Gracias por tu compra!')
})
    
