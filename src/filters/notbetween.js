'use strict';

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.notBetween]: value.replace(/ /g, '').split(',')};

  return toReturn;
};
