"use strict";

//function Osoba(imie, nazwisko) {
//	this.imie = imie;
//	this.nazwisko = nazwisko;
//	this.wzrost;
//	this.oczy;
//	this.wyswietlInfo = function(){
//		console.log("Imię: " + this.imie + " \n" 
//					+ "Nazwisko: " + this.nazwisko + "\n" 
//				    + "Wzrost: " + this.wzrost 
//					+ "\n" + "Oczy: " + this.oczy + "\n");
//	}
//}
//
////instancja obiektu to jest klasa
////klasa - opis własciwości, które maja obiekty
//
//var kasia = new Osoba("Kasia", "Zając");  //tworze nowy obiekt Osoba, i zapisuje do zmiennej kasia
//kasia.wzrost = 170;
//kasia.oczy="zielone";
//
//kasia.wyswietlInfo();
//
//
//var krystian = new Osoba("Krystian", "Dziopa");
//krystian.wyswietlInfo();

function Wakacje(miesiac) {
	this.miesiac = miesiac;
	this.kontynent;
	this.cena;
	this.wyswietlInfo = function() {
		console.log("Miesiac wypoczynku: " + this.miesiac + "\n"
				   + "Kontynent: " + this.kontynent + "\n"
				   + "Cena: " + this.cena + "\n");
	}
}


var holiday = new Wakacje("lipiec");
holiday.kontynent = "Australia";
holiday.cena = 2500;
holiday.wyswietlInfo();


var ferie = new Wakacje("luty");
ferie.kontynent = "Europa";
ferie.cena = 2000;

ferie.wyswietlInfo();

