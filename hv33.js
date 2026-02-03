let n = +prompt("Vvedite vashe chislo: ")
if (n % 2 === 0){
    let sum = 1;
    for(let i = 0; i < n; i++){
        sum = sum + i;
        console.log(sum);
    }
}
else{
    let mult = 1;
    for(let i = 1; i < n; i++){
        mult = mult * i;
        console.log(mult);
    }
}