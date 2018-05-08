import React from 'react';
import Graph from './Graph';

export default function Bill ({utils}) {
  let nums = [];
  let dates = [];
  utils.forEach((util) => {
    nums.unshift(util.bill);
    dates.unshift(util.year + "." + util.month);
  })

  return <Graph nums={nums} dates={dates} />
}
