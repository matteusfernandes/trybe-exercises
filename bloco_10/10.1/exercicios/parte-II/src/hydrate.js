function hydrate(amountDrank) {
  const amountWater = amountDrank.split(" ")
  .filter(n => (Number(n) || n == 0))
  .reduce((total, current) => total + parseInt(current), 0)

  if (amountWater > 1) return `${amountWater} copos de água`;

  return `${amountWater} copo de água`;
}

module.exports = { hydrate };