// let a = +prompt("Введите сумму покупок:");
// if( a > 2000 && a < 5000){
//     console.log("ваша скидка 15%")
// }
// else if( a > 5000){
//     console.log("ваша скидка 30%")
// }
// else if(a > 1000 && a < 2000){
//     console.log("ваша скидка 10%")
// }
// else {
//     console.log("у вас нету скидки")
// }



// let a = +prompt("введите число от 1 до 7");
// switch(a){
//     case 1:
//         alert("понедельник")
//         break;
//     case 2:
//         alert("вторник")
//         break;
//     case 3:
//         alert("среда")
//         break;
//     case 4:
//         alert("четверк")
//         break;
//     case 5:
//         alert("пятница")
//         break;
//     case 6:
//         alert("суббота")
//         break;
//     case 7:
//         alert("воскресенье")
//         break;
//     defualt:
//         alert("такого дня недели нет");
//         break;
// }



// let n = +prompt("Vvedite vashe chislo: ")
// if (n % 2 === 0){
//     let sum = 1;
//     for(let i = 0; i < n; i++){
//         sum = sum + i;
//         console.log(sum);
//     }
// }
// else{
//     let mult = 1;
//     for(let i = 1; i < n; i++){
//         mult = mult * i;
//         console.log(mult);
//     }
// }





// console.log("prostie chisla ot 2 do 100: ")
// for( i = 2; i<= 100; i++){
//     let chislo = true;
//     for( a = 2; a < i; a++){
//         if( i % a === 0){
//             chislo = false;
//             break;
//         }
//     }
//     if(num){
//         console.log(i)
//     }
// }




// let pred = +prompt("введите балл 1 пред: ")
// let predd = +prompt("введите балл 2 пред: ")
// let preddd = +prompt("введите балл 3 пред: ")
// let res = (pred + predd + preddd)/3;
// if( res >= 90 && res <= 100){
//     alert("vasha ocenka 5")
// }
// else if( res >=75 && res <=89){
//     alert("vasha ocenka 4")
// }
// else if(res >= 60 && res <= 74){
//     alert("vasha ocenka 3")
// }
// else{
//     alert("vasha ocenka 2")
// }




// let slovo = prompt("введите слово:")
// let res = slovo.includes("K")
// let resultat = (res === true)?"в слове есть к":"в слове нет к"
// alert(resultat)


let slovo = prompt("введите слово:")
let result = slovo.length;
console.log(result)