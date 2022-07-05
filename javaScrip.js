
const edadPersona= prompt("ingresa tu edad");
const nombrePersona= prompt("ingresa tu nombre")
let salida = nombrePersona 

if(edadPersona >=18 ) {
    alert ("Hola" + " " + salida + " " + " A disfrutar de Rotterdam Devoto");
    if (edadPersona >=18){
    }
    if( edadPersona == 40){ 
        alert(salida + " " + "Con tu entrada Tenés un trago gratis");}
    }
    
   else{ 
    alert( salida + " " + "Todavía NO podés venir a Rotterdam ...te esperamos para festejar tus 18");
}
    
/*TP COMPLEMENTARIO: "CICLO PARA ELEGIR UN NÚMERO Y LA CANTIDAD DE MÚLTIPLOS DEL MISMO, ARRANCANDO POR ÉL"*/
let num1, num2 ;
num1 = parseInt(prompt("Ingresa un Número") );
num2 = parseInt(prompt("Ingresa la cantidad de Múltiplos que quieres") );

for(let i= num1; i<= (num1*num2); i+= num1){
console.log(i)
}
