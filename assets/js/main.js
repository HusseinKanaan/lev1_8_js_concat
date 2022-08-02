const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and ";


//Aufgabe 1
let textA = text1.replace("coding", "");
let textB = textA.concat(" " + "and to the movie theater");
document.write(textB + "<br>");
//Aufgabe 2
let textC = textB.replace("school and to the", "");
document.write(textC + "<br>");
//Aufgabe 3
let textD = text2.concat(` ${text4} ${textA}`).replace("is", "are");
document.write(textD + "<br>");
//Aufgabe 4
let textE = text2.concat(` ${text4} ${textA}`).replace("is", "are").replace("school", "gym and to the movie theater");
document.write(`${textE} <br>`);
//Aufgabe 5
let textF = textB.replace("Sam", text2);
document.write(`${textF} <br>`);

