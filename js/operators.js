'use strict'; // zawsze używam, definiuje javascript na samym początku

var liczba1 = 13;
var liczba2 = 5;

var wynik; 

wynik = liczba1 % liczba2; 
console.log(wynik);

while (liczba2 < liczba1) {
	console.log(liczba2);
	liczba2++;
}

(2>1) ? console.log("tak") : console.log("nie");  // zmodyfikowany if

if( !(("2" !== 2) && (8>4)) ){
	document.write("<br> prawda");
}


var liczba3 = 6; 
var liczba4 = 7;

if ((liczba4 >= liczba3) || (liczba4 == liczba3)) {
	console.log("tak, większe");
} else {
	console.log("nie, mniejsze");
}


((liczba4 >= liczba3) || (liczba4 == liczba3)) ? console.log("większe") : console.error("mniejsze");

