const mapDiagrams = new Map();

function linearDiagram(id, values) {

  //const linearCanvas = document.getElementById(id).getContext('2d');
  
  const data = {
    labels: [ '5', '4', '3', '2', '1' ].reverse(),
    datasets: [{
      data: values,
      backgroundColor: colorLines,
      id: 'y-axis-marks',
    }]
  };

  const linearChartOptions = {
    scales: {
      yAxes: [{
        barPercentage: 1,
        categoryPercentage: 0.6,
        ticks: {
          fontColor: colorText,
          fontSize: 14,
          beginAtZero: true
        },
        gridLines: {
          display: false
        },
      }],
      xAxes: [{
        id: 'y-axis-marks',
        ticks: {
          fontColor: colorText,
          fontSize: 14,
          beginAtZero: true
        },
        gridLines: {
          display: false,
        },
      }]
    },
    legend: {
      display: false,
    },
  };

  if (!mapDiagrams.has(id)) {
    const linearCanvas = document.getElementById(id).getContext('2d');
    const chart = new Chart(linearCanvas, {
      type: 'bar',
      data: data,
      options: linearChartOptions
    });
    mapDiagrams.set(id, chart);
  } else {
    const chart = mapDiagrams.get(id);
    chart.data.datasets[0].data = values;
    chart.update();
  }
}
