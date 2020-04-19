'use strict';

module.exports = (column, value, Op) => {
  let toReturn = {};
  toReturn[column] = {[Op.notIn]: value.replace(/ /g, '').split(',')};

  return toReturn;
};
