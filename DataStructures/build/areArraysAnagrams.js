"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areArraysAnagrams = void 0;
/**
 * Funkcja przyjmuje dwie tablice z integerami i sprawdza czy są anagramami (mają takie same elementy, nieistotne w jakiej kolejnosci).
 * Należy podać poprawne dane wejściowe, dodatkowa walidacja pod kątem liczb całkowitych nie zaimplementowana.
 * @param arr_1 tablica liczb całkowitych
 * @param arr_2 tablica liczb całkowitych
 * @returns informacja czy dwie tablice są anagramami
 */
function areArraysAnagrams(arr_1, arr_2) {
    // Jeśli tablice są różnej długości, nie ma możliwości żeby zawierały dokładnie takie same elementy
    if (arr_1.length != arr_2.length) {
        return false;
    }
    // Definiujemy tzw "frequency counters" dla obu tablic,
    // w nich będziemy przechowywać informacje o występujących w tablicach elementach i ich liczbie
    const count_1 = {}, count_2 = {};
    // iterujemy po indeksach jednej z tablic (mają taką samą długość)
    for (let i = 0; i < arr_1.length; i++) {
        // zamieniamy aktualny element każdej z tablic, na klucz w postaci stringa, np: 1 => "1" 
        const key_1 = arr_1[i].toString(), key_2 = arr_2[i].toString();
        // jesli element pojawia się pierwszy raz w danej tablicy, ustawiamy jego wartość w counterze na 1,  
        // w przeciwnym wypadku inkrementujemy tę wartość  
        // trick: ++undefined === NaN, NaN || 1 === 1
        count_1[key_1] = ++count_1[key_1] || 1;
        count_2[key_2] = ++count_2[key_2] || 1;
    }
    // iterujemy po kluczach w pierwszym counterze
    for (const key in count_1) {
        if (count_1.hasOwnProperty(key)) {
            // jesli wartości pod jakimkoliwek z kluczy nie pokrywają się pomiędzy counterami, nie ma anagramów
            if (count_1[key] !== count_2[key])
                return false;
        }
    }
    // jeśli znajdziemy się tutaj oznacza to że oba countery są identyczne, a zatem tablice są anagramami 
    return true;
}
exports.areArraysAnagrams = areArraysAnagrams;
;
//# sourceMappingURL=areArraysAnagrams.js.map