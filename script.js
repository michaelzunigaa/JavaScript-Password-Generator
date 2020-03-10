function getRandomLower(){

    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
//console.log(getRandomUpper)
function getRandomUpper(){

    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
//console.log(getRandomUpper)
function getRandomNumber(){

    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){

    var symbols ='!@#$%^&*(){}[]`';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


