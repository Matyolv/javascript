let saludo = prompt ("Bienvenido a la calculadora de envios, desea realizar alguna operación?")


while (saludo != "si" && saludo != "no"){
    alert ("Por favor ingresa si o no")
    saludo = prompt ("Bienvenido a la calculadora de envios, desea realizar alguna operación?")
}

if (saludo == "si"){
    alert ("Gracias por elegirnos, a continuación ingrese los datos que se solicitan")
    
}else if (saludo == "no"){
    alert ("Gracias, Hasta luego!")
    
}

while (saludo != "no") {
    
let pesaje = parseInt(prompt("ingrese en kg el peso del bulto a enviar"))
while (pesaje > 30){
    alert ("Recuerde que el peso maximo del bulto puede ser hasta 30kg")
    pesaje = prompt("ingrese en kg el peso del bulto a enviar");
}

let resultado1 = pesaje *250;
let resultado2 = pesaje *400;
let resultado3 = pesaje *500;
if (pesaje < 10) {
    alert ("Su envio costara $" + resultado1)
    break
}if (pesaje < 20) {
    alert ("Su envio costara $" + resultado2)
    break
}if (pesaje <= 30) {
    alert ("Su envio costara $" + resultado3)
    break
}

}