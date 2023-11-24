// Pod każdym punktem dodaj swoje rozwiązanie, w tym celu stwórz plik sprint3zadanie.js

// Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
const numValue = 20;

// b) Utwórz zmienną typu string przechowującą twoje imię.
const name = "Piotrek";

// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let surname;
surnamename = "Matejek";

// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const person = { name: "Piotrek", age: 39 };

// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let age = true;
const married = false;

// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
const a = 5;
const b = 10;
const sumNumber = a + b;

// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
const fullName = "Piotr Matejek";

// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
const floatNumber= 21.2893;

// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
let subtrack;
subtrack = a - b;

// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
const city = "Woszczele";

// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
const dateArry = [100, "Ala ma kota", true];

// b) Stwórz obiekt car z właściwościami make, model i year.
const car = {
  marka: "Subaru",
  model: "Impreza",
  year: 1990,
};

// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
const variableArray = [10, 5.98, -18];

// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
const personData = {
  name: "Zdzichu",
  age: 99,
  isStudent: false,
};

// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
const emptyObj = {};
emptyObj["color"] = "green";

// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
const animals = [
  {name: "Kimba", age: 10 }, 
  { name: "Karino", age: 15 },
];

// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
const booleanArray = [true, false, false, true];

// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
const student = {
  name: "Felek",
  grades: [1, 2, 3, 4, 5],
  isActive: false,
};

// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
const newArray = [
  "string",
  100,
  false,
  { machineType: "forwarder 1070G", year: 2020 },
  { program: "JavaScript", version: 12345 },
];

// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
const book = {
  title: "Wojownik Swiatla",
  author: "Paulo Coelho",
  yearPublished: 1997,
};

// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
const ageValue = 13;

if (ageValue > 10) {
  console.log(true);
} else {
  console.log(false);
}

// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
const text = "costam";

if (text === "Hello") {
  console.log(true);
} else {
  console.log(false);
}

// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const val = ageValue > 11 ? true : false;

// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
let ages = 18;

if (ages >= 18) {
  console.log(true);
} else {
  console.log(false);
}

// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
const emptyArray = [];

if (emptyArray.length === 0) {
  console.log("empty");
} else {
  console.log("not empty");
}

// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.
const isMember = false;

const rabat = isMember ? '10%' : 0;
console.log(rabat)

// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
const greetings = "helloDevStock";

if (greetings.length > 5) {
  console.log(true);
} else {
  console.log(false);
}

// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
const isOdd = 10;

if (isOdd % 2 === 0) {
  console.log("The number is odd");
} else {
  console.log("The number is not odd");
}

// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
const condition = false;
const checkCondition = condition ? "Is true" : "Is false";
console.log(checkCondition)

// j) Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
let found = false
const searchKey = "author";
const books = {
  title: "Wojownik Swiatla",
  author: "Paulo Coelho",
  yearPublished: 1997,
};

found = books.hasOwnProperty(searchKey) ? true : false;

console.log(found)

