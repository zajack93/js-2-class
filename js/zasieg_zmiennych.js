"use strict";

var zmienna1=18;

function add() {
	var result;
	var zmienna2 = 6;
	result = zmienna1 + zmienna2;
	console.log("wynik lokalna funckja: " + result); 
	return result;
}


var suma = add();

console.log(suma);
document.write("Wynik dodawania zmiennej lokalnej i globalnej to: " + suma + ".");