function suma(){
    let A=0;
    let B=0;
    let S=0;

    alert("Por favor ingrese el primer valor");
    A = parseInt(prompt(""));
    alert("Por favor ingrese el segundo valor"); //Alert no permite saltos de línea en el texto
    B = parseInt(prompt(""));
    S = A+B;
    let R=A-B;
    let M=A*B;
    let D=A/B;
    alert("La suma es: "+S);
}

function Operaciones(){
    let A=parseInt(prompt("Por favor ingrese el primer valor"));
    let B=parseInt(prompt("Por favor ingrese el segundo valor"));
    let S=A+B;
    let R=A-B;
    let M=A*B;
    let D=A/B;
    alert("La Suma es: "+S+"\nLa Resta es: "+R+"\nLa Multiplicación "+M+"\nLa División es: "+D);
}

function Mayor(){
    let A=parseInt(prompt("Por favor ingrese el primer valor"));
    let B=parseInt(prompt("Por favor ingrese el segundo valor"));
    if (A>B){
        alert("EL número mayor es: "+A);
    }
    else if (B>A){
        alert("EL número mayor es: "+B);
    }
    else{
        alert("Los números son iguales");
    }
}

function Menor(){
    let A=parseInt(prompt("Por favor ingrese el primer valor"));
    let B=parseInt(prompt("Por favor ingrese el segundo valor"));
    let C=parseInt(prompt("Por favor ingrese el tercer valor"));
    let M;
    if (A>=B){
        M=B;
    }
    else {
        M=A;
    }
    if (C<M){
        M=C;
    }
    alert("El número menor es "+M);
}

function Par(){
    let A=parseInt(prompt("Por favor ingrese número"));
    if (A==0){
        alert("El número cero no es par ni impar");
    }
    else if (A%2){
        alert("El número es impar");
    }
    else{
        alert("El número es par");
    }
    alert("El número menor es "+M);
}

function Cuadrado(){
    let A=parseInt(prompt("Ingrese el número"));
    alert("El cuadrado del número ingresado es: "+A**2);
}

function Area(){
    let A=parseInt(prompt("Por favor ingrese la altura del triángulo"));
    let B=parseInt(prompt("Por favor ingrese la base del triángulo"));
    alert("El área del triángulo es: "+A*B/2);
}

function Convercion(){
    let A=parseInt(prompt("Ingrese valor de la longitud en metros"));
    alert("El valor de la longitud en centímetros es : "+A*100+"\nEl valor de la longitud en pulgadas es: "+A*39.3701);
}

function Años(){
    let X=2023;
    let B=0;
    let S=0;

    B=parseInt(prompt("Ingrese su edad"));
    S=X-B;
    alert("Usted nacio en el año " + S);

}

function inversion(){
    let capital = 0;
    let tasainteremensual = 0;
    let tiempo = 0;
    let utilidad = 0;
    let msese = tiempo * 12;
    capital = parseInt(prompt("por favor ingrese el monto a invertir"));
    tiempo = parseInt (prompt("Ingrese el tiempo en años que desea dejar la inversión"));
    tasainteremensual = parseInt(prompt("1,7/100"));
    utilidad = parseInt(prompt(""));
    alert("la utilidad es:" +capital*tasainteremensual+"\n tiempo de inversión: "+capital*interes);     
}
function colegio(){
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    let nota4 = 0;
    let nota5 = 0;
    let nota6 = 0;
    let nota7 = 0;
    nota1 = parseInt(prompt("por favor ingrese nota1"));
    nota2 = parseInt(prompt("por favor ingrese nota2"));
    nota3 = parseInt(prompt("por favor ingrese nota3"));
    nota4 = parseInt(prompt("por favor ingrese nota4"));
    nota5 = parseInt(prompt("por favor ingrese nota5"));
    nota6 = parseInt(prompt("por favor ingrese nota6"));
    nota7 = parseInt(prompt("por favor ingrese nota7"));
    //se calcula el promedio de las notas. 
    let sumadeNotas = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7; 
    let promedio = sumadeNotas/7;
    //Se verifica si el alumno aprobo o reprobo.
    if (promedio=>6.1){
        alert("El estudiante Aprobo con un promedio de " + promedio);
    }
    else {
        alert("El estudiante Reprobo con un promedio de" + promedio);
    }
}
function fruteria(){
    let preciokilo = 4500; //precio de la manzana por kilo
    let peso = 0;
    let descuento = 0;
    preciokilo = parseInt(prompt("ingrese precio popr kilo"));
    peso = parseInt(prompt("ingrese la cantidad que desea llevar"));
    //se realiza las condiciones para aplicar el descuento.
    if (peso=0-2){
        alert("obtiene 0% de descuento");    
    }
    else if(peso >=3 && peso<=5){
        alert("obtiene 10% de descuento");
    }
    else if (peso >=6 && peso<=10){
        alert("obtiene 15% de descuento");
    }
    if(peso=>11){
        alert("obtienen 20% de descuento");
    }
}
function obrero(){
    let salariosemanal = 0;
    let horastrabajadas = 0;
    let horasextras = 0;
    salariosemanal =  parseInt(prompt("ingrese salario"));
    horastrabajadas = parseInt(prompt("ingrese horas trabajadas"));
    if (horastrabajadas <=40) {
        salariosemanal = horastrabajadas * 10000;
    } else {
        let horasextras = horastrabajadas - 40;
        salariosemanal = 400000 + (horasextras * 20000);
    }
    alert("El salario es:" +salariosemanal+"pesos")    

}