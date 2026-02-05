let num = +prompt("Vvedite chislo ot 0 do 3: ");
switch ( num ) {
    case 0:
        alert ('Вы ввели 0!')
        break;
    case 1:
        alert ('Вы ввели 1!')
        break;
    case 2:
    case 3:
        alert ('Вы ввели 2 или 3!')
        break;
    default:
        alert ('Число вне диапазона(')
        break;
}