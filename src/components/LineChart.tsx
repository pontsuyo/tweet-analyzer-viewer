import React from 'react';
import {Line} from 'react-chartjs-2';

export interface Scores {
  favorite: TimePoint[];
  retweet: TimePoint[];
}

export interface TimePoint {
  time: BigInt
  count: BigInt
}

export default function LineChart (scores: Scores){
  
  let favoriteDataBase =
          {
            label: '#favorite',
            yAxisID: 'y-axis-fav',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,192,192,0.4)',
            borderColor: 'rgba(253,57,57,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(253,57,57,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(253,57,57,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 7,
            data: []
          }
  
  let retweetDataBase =
      {
        label: '#RT',
        yAxisID: 'y-axis-rt',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(105,239,140,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 7,
        data: []
      }
      
  const data = {
    labels: [],
    datasets: []
  };
  
  let fdata = []
  let rdata = []
  
  scores.favorite.map((f: TimePoint) => {
    data.labels.push(f.time)
    fdata.push(f.count)
  })
  favoriteDataBase.data = fdata
  data.datasets.push(favoriteDataBase)
  
  scores.retweet.map((r: TimePoint) => {
    rdata.push(r.count)
  })
  retweetDataBase.data = rdata
  data.datasets.push(retweetDataBase)
  
  const options= {
    scales: {
      yAxes: [{
        id: "y-axis-fav",   // Y軸のID
        type: "linear",   // linear固定
        position: "left", // どちら側に表示される軸か？
      }, {
        id: "y-axis-rt",
        type: "linear",
        position: "right",
      }],

    }
  }
  
  return (
      <div>
        <Line
            data={data}
            width={600}
            height={200}
            options={options}
        />
      </div>
  );
}