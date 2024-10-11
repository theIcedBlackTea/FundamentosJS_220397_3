// tipo de datos en JS

//1.- Undifined diferente de (null)
console.warn("--- Tipo de Dato UNDEFIEND");
let cliente;
console.log(`El cliente es ${cliente}`); // ALT+96 PARA 96 ``
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente= "Daniel de Jesús";
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente=230733
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//Undefined

//2 Bollean

console.warn("--Tipo de dato: BOOLEAN( Boleano- True/False)")
let esPremium="No lo sé";
console.log(`Es el cliente Premium ${esPremium}`)
console.log(`El tipo de dato ede la variable esPremium es:  ${typeof(esPremium)}`)
console.log(`Asignado el valor \"true" a la variable.`)
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`)
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console .log("Cambiando el valor de esPremium a false")
esPremium=0;
// 3.- number
var cantidad;
let saldo_cuenta=-2500
const costo_producto= 10.50
let monto_transaccion;
console.warn("--- Tipo de Dato -NUMBER (Numeros, positivos, negativos, decimales, flotantes)")
console.log(`tu saldo eal dia de hoy es de : ${saldo_cuenta}, (tipo de Dato = ${typeof(saldo_cuenta)})`)
cantidad = 8;
console.log(`Has elegido comprar: 4 ${cantidad} de producto.`)
console.log(`El importe total de la compra es de : ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es ${saldo_cuenta}`);
// El cliente raliza un monto un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido receibido, tu nuevo saldo es de :  ${saldo_cuenta+monto_transaccion}`)

//  4. STRING (cadena de caracteres)
const alumno = "Marcos Jesus Rios Duran";
let producto;
console.warn("--- Tipo de dato - STRING (Cadena de caracteres)")
console.log (`El nobre del alummno es  ${alumno}, que es de tipo de dato ${typeof(alumno)}` )

// inicialisamos el valor de lavariable producto
producto="MONITOR 20\" FULL HD"
console.log(`El nombre del producto es ${producto}, que es de tipo ${typeof(producto)} `)

console.log(`Más adelante podremos transformar el contenido de los STRING usando metodos y funciones especificas, como comvertir su valor a mayusulas: ${alumno} => ${alumno.toUpperCase()}`)
console.log(`0 en su defecto a minusculas: ${producto}=> ${alumno.toLowerCase()}`)

// 5. TIPO DE DATO BIGINT (un numero de mayor amplitud)

const numBig=1234567890;
const numBig2=12345678901234567890;
let numBig3=12345678901234567890134567890;
let numBig4=1234567890123456789012345678901234567890;
// el numero que pone punto decimales una e+numero
console.warn("--- Tipo de dato - BIGINT (numero de mayor amplitud)")

console.log(`El primer experimento de un numero  grande es: ${numBig}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numBig)}`)
console.log(`El segundo experimento de un numero  grande es: ${numBig2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numBig2)}`)
console.log(`El tercer experimento de un numero  grande es: ${numBig3}, que si es soportado por NUMBER pero perdiendo precision y su tipo de dato es: ${typeof(numBig3)}`)
console.log(`El cuarto experimento de un numero  grande es: ${numBig4}, que si es soportado por NUMBER pero perdiendo precision y su tipo de dato es: ${typeof(numBig4)}`)

let numBig5=BigInt(123456789012345678901234567890n);
let numBig6=BigInt(1234567890123456789012345678901234567890n);


console.log(`El quinto experimento de un numero  grande es: ${numBig5}, que si no es soportado por NUMBER perdiendo presicion y su tipo de dato es: ${typeof(numBig5)}`)
console.log(`El sexto experimento de un numero  grande es: ${numBig6}, que si no es soportado por NUMBER perdiendo precision  y su tipo de dato es: ${typeof(numBig6)}`)

const nume=25;
//console.log(`intentado realizar una suma entre un bigint y number, elresultado es: ${nume+numBig5} `) NO SE PUEDE SUMAR TIPOS DE DATOS DIFERENTES
console.log(`intentado realizar una suma entre un bigint y number, elresultado es: ${BigInt(nume)+numBig5} `)

// TIPO DE DATO SYMBOL
console.warn("--- Tipod de Dato SYMBOL (Simbolo)")
const numero1 =5;
const numero2 =5.0;
const numero3 ="5";
const numero4 ="5.0";
const numero5= Symbol(5)
const numero6= Symbol(5)
const numero7= Symbol(5.0)
const numero8= Symbol("5")
const numero9= Symbol("5.0")

//Pruebas comparativas
//1
console.log("¿Es 5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor.")
else
    console.log("Se comparo numero1 con numero2, determinando que no tienen el mismo valor.")


//2
console.log("¿Es 5 = \"5\"?")
    if(numero1 == numero3) //Estrictamente igual (equidad)= Mismpo valor, mismo tipo de datos
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que no tienen el mismo valor.")

//3
console.log("¿Es 5 === \"5\"?")
    if(numero1 === numero3)
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//4

console.log("¿Es 5 = \"5.0\"?")
    if(numero1 == numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero4, determinando que no tienen el mismo valor.")

//5        

console.log("¿Es 5 === \"5.0\"?")
    if(numero1 === numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
     console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//6
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero5)}`)
    if(numero1 == numero5)
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

//7
console.log(`¿Es 5 === Symbol(5.0)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero7)}`)
    if(numero1 == numero7)
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")
    
//8
console.log(`¿Es 5 === Symbol(\"5\")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero8)}`)
    if(numero1 == numero8)
        console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//9
console.log(`¿Es 5 === Symbol("5.0")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero9)}`)
    if(numero1 == numero9)
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

// 10 prueba importante

console.log(`¿Es Symbol(5) === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero5)} y numero5 del tipo de dato: ${typeof(numero6)}`)
    if(numero5 === numero6)
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor y el mismo tipo de dato, es la condición de Symbol la que lo hace único en la memoria.")


// 7. NULL 

console.warn("---- Tipo de Dato -NULL (Nulo o Vacío))");
// El tipo de dato nule se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacio, bajo su consentimiento, a diferencia de UNDEFIEND que es un valor desconocido asignado por DEFAULT por JS.

let nombreUsuario = null;
let passUsuario = null;
let generoUsuario= null;
let estatusRelacionSentimental = null;
let fecha_ultimoPost;

// Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario.

// Sí el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicacion web, puede explorar contenido de acceso publico. y no existira información para mostrar.

// En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numbero telefónico o correo electrónico y una contraseña que deberemos guardar en las variables previamente declaradas.

// Supongamos que el usuario: Marco R. con correo electrónico marco.ram@gmail.com desea ingresar con su contraseña: pas1234

nombreUsuario = "theIcedBlackTea";
passUsuario = "Totaso08";

// en este momento de ejecución del sistema no sabemos su género , ni su estatus de relación sentimental.

console.log(`El usuario: ${nombreUsuario} esta intentado logearse con una contraseña de: ${passUsuario}`);

// Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.

// Dado que Marco es del genero Másculino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto generar la actualización de los valores de las variables
generoUsuario="M"
estatusRelacionSentimental=null

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil podemos deducir que es del género ${generoUsuario} y que su estatus de relación es: ${estatusRelacionSentimental} y su última publicación la realizó el: ${fecha_ultimoPost}`);

// Comparando NULL vs UNDEFINED
// Si bien UNDEFINED  y NULL tienen el mismo valor , no tienen el mismo tipo de dato


console.log("Comparación de la equidad ente Undefined y  Null:")
console.log(
    (fecha_ultimoPost == estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor" :
    "Las variables no tienen el mismo valor"
);

console.log("Comparación de la indentidad ente Undefined y  Null:")
console.log(
    (fecha_ultimoPost === estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato" :
    "Las variables  tienen el mismo valor, pero no el mismo tipo de dato"
);


// 8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función)")

// Declaramos una funcion que nos permita recibir un paramento en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta función la asignamos a una constante.
const saludar =  function(nombre){return `Hola, ${nombre}!`}

// Invocamos a la función declarada
console.log(saludar('Daniel'));

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)