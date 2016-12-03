"use strict";

//json - to format przechowywania danych i wymiany danych javascript object notation
//jest to format tekstowy bazujący na JS, jest formatem niezależnym od języka, gdyz wiele innych jezykow uzywa tego formatu
// np: 
//{
//	 "employees":[
//		 {"firstName":"John","lastName":"Doe"},
//		 {"firstName":"Janet","lastName":"Draw"},
//	 ]
//}
//
//var jsonOsoby = {
//	"osoby": [
//		{imie: "Kasia", nazwisko: "Zając", wzrost: "170", oczy: "zielone"},
//		{imie: "Krystian", nazwisko: "Dziopa", wzrost: "180", oczy: "niebieskie"},
//		{imie: "Łukasz", nazwisko: "Zając", wzrost: "170", oczy: "zielone"}
//		
//	]
//}


var jsonWakajce = {
	"miejsca": [
		{miesiac: "lipiec", kontynent: "Australia", cena:"2500"},
		{miesiac: "luty", kontynent: "Europa", cena:"2000"},
		{miesiac: "grudzien", kontynent: "Afryka", cena:"4000"}
	]
}

console.log(jsonWakajce);

//DOM - document object objects - sposob prezentacji zlozonych dokumentow xml i html w postaci modelu obiektowego. dzieki niemu skrypty maja dynamiczny dostep do dokumentu oraz mogą go aktualizować tzn. zmieniać style, treść i jego strukturę. DOM jest modelem hierarchicznycm, i udostepnia zestaw obiektów wyswietlajacym strukture naszej strony
//Dom definiuje elementy html jako obiekty - kazdy znacznik np. <p> na stronie jest obiektem
//właściośc elementow HTML
//metody dostepu do wszystkich elementow HTML
//zdarzenia dla elementow HTML