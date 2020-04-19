'use strict';

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.between]: value.replace(/ /g, '').split(',')};

  return toReturn;
};
