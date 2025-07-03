const { ajouter, diviser } = require('./math');

test('ajouter(2, 3) doit retourner 5', () => {
  expect(ajouter(2, 3)).toBe(5); // test de non-régression
});

test('diviser(10, 2) doit retourner 5', () => {
  expect(diviser(10, 2)).toBe(5); // test de comportement attendu
});

test('diviser par zéro doit lever une erreur', () => {
  expect(() => diviser(10, 0)).toThrow('Division par zéro interdite'); // effet de bord
});
