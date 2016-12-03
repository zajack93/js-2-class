"use strict"; 

var liczba1 =50;

var tab = [1,2,3];

var tabKolory = ["żółty", "pomarańczowy", "łososiowy"];
tabKolory[3] = "czarny";

tabKolory.push("czerwony");   //dodaje na końcu tablicy
tabKolory.pop();

tabKolory.unshift("brazowy");  //dodaje na pierwszy element tablicy

console.log(tabKolory[0]);
console.log(tabKolory[1]);
console.log(tabKolory[3]);
console.log(tabKolory[4]);

var dlugoscTablicy;
dlugoscTablicy = tabKolory.unshift("zielony"); 
console.log(dlugoscTablicy);


console.log("lalala 1 " + tabKolory.length);

tabKolory.shift();  //uwua pierwszy parametrs z tablicy

console.log("lalala 2 " + tabKolory.length);

for ( var i=0; i<tabKolory.length; ++i) {
	console.log(tabKolory[i]);
}

//for inny rodzaj
tabKolory.forEach(function(element, iteration) {
	console.log("Numer koloru " + ++iteration + " : " + element);
} )
//console.log(tabKolory);

//join sluzy do łaczenia elementu w jeden tekst

var polaczoneZmienne = tabKolory.join("+");

console.log(polaczoneZmienne);

//alert("It's game time");

//reverse przestawia kolejnosc eleementow tablicy od tylu do przodu
dlugoscTablicy = tabKolory.reverse();
console.log(dlugoscTablicy);

var uniwersalnaZmienna;

uniwersalnaZmienna = tabKolory.sort();
console.log(uniwersalnaZmienna);

// concat - łaczy dwie tablice

var tabKolory2 = ["niebieski", "różowy", "lazurowy", "biały"];
console.log("tab koloty2: " + tabKolory2);

console.log(tabKolory.concat(tabKolory2));


//tablica.indexOf("string") - podajemy element talibcy i mowi nam w którym miejscu tablicy on jest

uniwersalnaZmienna = tabKolory2.indexOf("niebieski");
console.log(uniwersalnaZmienna);

//Array.isArray(tablica) - sprawdza czy obiekt jest tablica

if (Array.isArray(liczba1)) {
	console.log("jest tablica");
} else {
	console.log("nie jest");
}

if (Array.isArray(tabKolory2)) {
	console.log("jest tablica");
} else {
	console.log("nie jest");
}


//tablica.slice(1,3) wybiera czesc tablicy, zwraca owa tbalice i obcina z obu stron

//console.log(tabKolory2.slice(1,3));

//tablica.splice(1,3) - dodaje i usuwa od której pozycji na 1 pozycji do której pozycji 

console.log(tabKolory2);
tabKolory2.splice(2,1, "brunatny", "złoty")
console.log(tabKolory2);

//tablica.toString() - konwertuje do stringa

console.log(tabKolory2.toString());