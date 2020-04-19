'use strict';

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.in]: value.replace(/ /g, '').split(',')};

  return toReturn;
};