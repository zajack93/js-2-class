"use strict";

var Osoba = {
	imie: "Marcin ",
	wzrost: 180,
	wyswietlDetale: function() {
		console.log(this.imie + " " + this.wzrost);  //metody to funkcja która moge wykonac tylko na obiekcie - danym elemencie
	}
}

//aby odwolac sie do wnetrza obiektu używamy this

Osoba.imie = "Kasia ";
Osoba.wzrost = 170;
Osoba.wyswietlDetale();


var Person = {
	name: "Kate ", 
	height: 170, 
	showDetails: function() {
		console.log(this.name + " " + this.height);
	}
	
}

Person["name"] = "Asia";
Person.height = 170.0;
Person.eyes = "oczy zielone - życie szalone ";

console.log(Person.eyes);

Person.showDetails = function() {
		console.log(this.name + " " + this.height + " " + this.eyes);
}


//do usuwania obiektu usuwamy delete
//delete Person.eyes;
//
//console.log(Person.eyes);

Person.showDetails();

