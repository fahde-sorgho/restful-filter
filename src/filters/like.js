'use strict'

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.like]: value};

  return toReturn;
}
