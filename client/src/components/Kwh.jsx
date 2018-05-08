import React from 'react';
import Graph from './Graph';

export default function Kwh ({utils}) {
  let nums = [];
  let dates = [];
  utils.forEach((util) => {
    nums.unshift(util.kwh);
    dates.unshift(util.year + "." + util.month);
  })

  return <Graph nums={nums} dates={dates} />
}
