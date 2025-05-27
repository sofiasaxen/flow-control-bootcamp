//Ta hjälp av en if-sats reda på om talet a är större än b.
let a = 10;
let b = 20;

if (a<b) {
    console.log("B is bigger than A");
}

//Ta med hjälp an en if-sats reda på om a är lika med b.
let c = "apple";
let d = "pear";

if(c === d) {
    console.log("Pear and apple are the same!")
} else {
    console.log("Pear and apple are not the same!")
}

/*Gör ett program som tar emot två numreriska värden. 
programmet ska utvärdera vilket tal som är stört och skriva ut det.

const number1 = prompt("Skriv in första talet")
const number2 = prompt("Skriv in andra talet")

if (number1>number2) {
    console.log("Första talet är störst " + number1);
} else if (number2>number1) {
    console.log("Andra talet är störst " + number2); 
} */

/*Gör ett program som tar ett number och ta reda på om talet är jämt eller udda
const number = prompt("Skriv in ett nummer")

if (number % 2 == 0) {
    console.log("Numret är jämnt");
} else {
    console.log("Numret är ojämnt");
}

/*Gör ett program som ska sitta i en sensor på Helix.
Man måste vara minst 150cm lång. Programmet ska skriva ut true eller false. 
const length = prompt("Skriv in din längd")

    if (length >= 150) {
    console.log("True")
} else if 
    (length <= 150)
    console.log("False");
{
} */

/*På Liseberg finns 4 olika åkband; small, medium, large och platinum.
För att få åka Balder krävs large eller platinum. 
Gör ett program som kollar ens åkband och skriver ut ifall man får åka Balder eller inte. */
let karusell = prompt ("Skriv biljettyp")
    if (karusell === "small") {
     console.log("Du får inte åka")
    
    } else if (karusell === "medium") {
     console.log("Du får inte åka") 

    } else if (karusell === "large") {
     console.log("Du får åka")

    } else if (karusell === "platinum") {
    console.log("Du får åka")
    
    } else {
        console.log("Ogiltig biljettyp");
    }
    