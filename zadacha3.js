console.log("prostie chisla ot 2 do 100: ")
for( i = 2; i<= 100; i++){
    let chislo = true;
    for( a = 2; a < i; a++){
        if( i % a === 0){
            chislo = false;
            break;
        }
    }
    if(num){
        console.log(i)
    }
}
