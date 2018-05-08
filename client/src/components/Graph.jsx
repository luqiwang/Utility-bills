import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'

export default function Graph ({nums, dates}) {
  if (!nums) return (<div>Loading...</div>);
  const data = {labels: dates, datasets: [{
    data: nums,
    backgroundColor: "rgba(42, 181, 60, 0.2)",
    borderColor: "rgba(42, 181, 60, 0.8)"
  }]};

  return <Line data={data} options={{legend:{display:false}}} />
};
