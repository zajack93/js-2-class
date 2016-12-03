"use strict ";

function multiply(var1, var2) {
	var result; 
	result = var1 * var2; 
	return result;
}


var wartosc1 =6;
var wartosc2 =7; 

var wynik, wynik2, wynik3;
wynik = multiply(wartosc1,wartosc2);
wynik2 = multiply(20,17);
wynik3 = multiply(37,12);

//multiply(wartosc1,wartosc2);
console.log(wynik);
console.log(wynik2);
console.log(wynik3);
//console.log(multiply);
document.write("<br> wynik1 to: " + wynik + "<br>" );
document.write(wynik2 + "<br>");
document.write(wynik3 + "<br>");