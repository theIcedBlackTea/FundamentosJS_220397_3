//tres tipos de memoria que tiene un equipo de computo RAM, ROM, Disco Duro , en la Ram se gurda en la variable, HDD
// Declarar variables

var nombre = "Daniel de J.";
let edad = 22;
let apellido = ""; // Declarar apellido como una cadena vacía

// Imprimir la información usando console.log()
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Apellido:", apellido);
console.warn("--- Declaracion de variables usando: VAR");
apellido="Bravo Godínez";
console.log("ya declaramos las variables");
const university="UTXJ";
const matricula=220397;

console.warn("Declaración de variables usando: CONST")
console.log("hola ",nombre," ",apellido," sé que estudias actualmente en la ",university," asignaron la matricula: ",matricula," y tienes una edad de: ",edad," años")
console.log("Analizando los datos puedo decir que ");
console.log("mi nombre es de tipo ",typeof(nombre));
console.log("mi universidad es de tipo ",typeof(university));
console.log("mi matricula es de tipo ",typeof(matricula));
console.log("mi nombre es de tipo ",typeof(edad));

//c) LET
let fechaNacimiento= "2002-08-08";
let colorfavorito;
console.warn("--- Declaracion de variables locales : LET");
console.log("Genial, te voy conociendo más, tu fecha de nacimiento es: ",fechaNacimiento," y tu colorfavorito es: mmmmmmmmm dejame pensar ....");
colorfavorito="Verde";
console.log(`creo que es ${colorfavorito}, le atiné :)`);