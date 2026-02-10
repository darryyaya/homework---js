let a = +prompt("Введите сумму покупок:");
if( a > 2000 && a < 5000){
    console.log("ваша скидка 15%")
}
else if( a > 5000){
    console.log("ваша скидка 30%")
}
else if(a > 1000 && a < 2000){
    console.log("ваша скидка 10%")
}
else {
    console.log("у вас нету скидки")
}