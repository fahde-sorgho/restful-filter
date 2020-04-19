'use strict'

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.ne]: value};

  return toReturn;
}
