'use strict';

const utils = require('./utils');

const defineOrder = (config, queryString, allowedKeys) => {
  const orderResult = [];
  const mappedQueryStrings = !config.case_sensitive
    ? utils.lowercasedQuerystring(queryString)
    : queryString;

  const orderName = !config.case_sensitive
    ? config.orderParamName.toLowerCase()
    : config.orderParamName;

  const orderValue = mappedQueryStrings[orderName];
  if (orderValue) {
    // split the value of order, in case doing order with multi columns
    const orderValues = utils.cleanWhitespaces(orderValue).split(',');

    // check every value is in allowed keys with case sensitive & case insensitive
    for (const orderColumn of orderValues) {
      const hasDashOnBeginning = orderColumn.startsWith('-');
      const columnWithRemovedDash = orderColumn.replace(/-/g, '');
      if (
        (allowedKeys !== null && allowedKeys.includes(columnWithRemovedDash)) ||
        allowedKeys === null
      ) {
        orderResult.push([
          columnWithRemovedDash,
          hasDashOnBeginning ? 'DESC' : 'ASC',
        ]);
      }
    }
  }

  return orderResult;
};

module.exports = defineOrder;
