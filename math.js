function ajouter(x, y) {
  return x + y;
}

function diviser(x, y) {
  if (y === 0) throw new Error('Division par zéro interdite');
  return x / y;
}

module.exports = { ajouter, diviser };
