// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('One euro shuld be 1.07 usd', () => {
    const usd = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.07
    expect(usd).toBe(expected)
    //expect
});
test('One dollar shuld be 146.26 yen', () => {
    const usd = fromDollarToYen(2)
    const expected = 2 * 146.26
    expect(usd).toBe(expected)
});
test('156.5 yen shuld be 0.87 pound', () => {
    const usd = fromYenToPound(156.5)
    const expected = 156.5 * (0.87 / 156.5)
    expect(usd).toBe(expected)
});

