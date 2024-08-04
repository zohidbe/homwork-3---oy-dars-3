// let son = 3;

// if (son < 5) {
//     son -= 1;
// }
// console.log(son);

let son1 = -7, son2 = 72, son3 = 33; 
let musbat_sonlar = 0;
let manfiy_sonlar = 0;

if (son1 > 0) {
    musbat_sonlar += 1;
} else if (son1 < 0) {
    manfiy_sonlar += 1;
}

if (son2 > 0) {
    musbat_sonlar += 1;
} else if (son2 < 0) {
    manfiy_sonlar += 1;
}

if (son3 > 0) {
    musbat_sonlar += 1;
} else if (son3 < 0) {
    manfiy_sonlar += 1;
}

console.log("Musbat sonlar: " + musbat_sonlar);
console.log("Manfiy sonlar: " + manfiy_sonlar);

