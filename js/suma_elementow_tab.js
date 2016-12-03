"use strict";

//[2,3,4,5,6,7,8] - suma wszystkich elementow tablicy za uzyciem funkcji


function add (tablicaLiczb) {
	var licznik=0;

	for (var i=0; i<tablicaLiczb.length; ++i){

		licznik+=tablicaLiczb[i];
		console.log("lokalna suma " + i + " tego elementu to: " + licznik);
	}
	return licznik;
}


var tablicaElementow = [2,3,4,5,6,7,8];

var temporary = add(tablicaElementow);

console.log("globalny wynik sumy to: " + temporary);