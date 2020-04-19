'use strict'

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.notILike]: value};

  return toReturn;
}
