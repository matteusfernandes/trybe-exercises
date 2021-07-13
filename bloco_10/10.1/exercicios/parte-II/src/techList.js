function sortObject(objectOrdered) {
  objectOrdered.sort(function (a, b) {
    if (a.tech > b.tech) return 1;
    if (a.tech < b.tech) return -1;
    
    return 0;
  });
  return objectOrdered;
}

function techList(listOfTech, name) {
  let result = [];
  
  if (listOfTech.length === 0){
    return 'Vazio!';
  };
  
  listOfTech.forEach((tech) => {
    result.push({tech, name})
  });

  return sortObject(result);
}

module.exports = { techList };