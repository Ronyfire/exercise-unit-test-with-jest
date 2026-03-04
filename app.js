// Contenido de app.js 
console.log("Hello World")
// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3))

// One euro is:
let oneEuroIs = {
    JPY: 156.5, // japan yen
    USD: 1.07, // us dollar
    GBP: 0.87, // british pound
};
const fromEuroToDollar = eur => {
    let exchange = eur * oneEuroIs["USD"];
    return exchange;
};
console.log(fromEuroToDollar(158));

const fromDollarToYen = dollar => {

    const dollarToEuro = dollar / oneEuroIs["USD"];

    const euroToYen = dollarToEuro * oneEuroIs["JPY"];

    return Number(euroToYen.toFixed(2));
};
console.log(fromDollarToYen(1));

const fromYenToPound = yen => {

    const yenToEuro = yen / oneEuroIs["JPY"];

    const yenToPound = yenToEuro * oneEuroIs["GBP"];

    return Number(yenToPound.toFixed(2));
};

console.log(fromYenToPound(156.5));
//Extra------------------------------
//Ratio de cambio de moneda
const rate = {
    EURToUSD: oneEuroIs.USD,
    EURToJPY: oneEuroIs.JPY,
    EURToGBP: oneEuroIs.GBP,
    USDToEUR: 1 / oneEuroIs.USD,
    JPYToEUR: 1 / oneEuroIs.JPY,
};
//Convertimos a lo que queremos
const fromDollarToYenNew = usd => usd * (oneEuroIs.JPY / oneEuroIs.USD);
const fromYenToPoundNew = yen => yen * (oneEuroIs.GBP / oneEuroIs.JPY);
     
console.log(fromDollarToYenNew(1));        
console.log(fromYenToPoundNew(156.5));    
// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };