'use strict'

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.lte]: value};

  return toReturn;
}
