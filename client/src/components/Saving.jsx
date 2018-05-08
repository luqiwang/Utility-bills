import React from 'react';
import Graph from './Graph';

export default function Saving ({utils}) {
  let nums = [];
  let dates = [];
  utils.forEach((util) => {
    nums.unshift(util.savings);
    dates.unshift(util.year + "." + util.month);
  })

  return <Graph nums={nums} dates={dates} />
}
