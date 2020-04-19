'use strict'

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.iLike]: value};

  return toReturn;
}
