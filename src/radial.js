let instance = null;
//const radialCanvas = document.getElementById('radial_diagram').getContext('2d');

const labels = [
  ['Перенесення', 'занять і', 'запізнення'],
  ['Своєчасність надання', 'питань до заліку'],
  ['Змістовність ', 'матеріалу'],
  ['Наявність', 'РСО'],
  ['Доступність', 'матеріалів'],
  'Вимогливість',
  ['Відповідність', 'практик лекціям'],
  ['Організація', 'лекційного часу'],
  'Коректність',
  ['Інформування', 'студентів'],
  ['Задоволення', 'викладанням', 'дисципліни'],
];

const teachersFactory = (name, data) => ({
  label: name,
  backgroundColor: colorGraph,
  borderColor: colorLines,
  data,
  pointRadius: '0',
  borderWidth: '3',
});

const datasets = [
  teachersFactory('Стешин В. В.', Array(11).fill(0).map(() => Math.random() * 4 + 1))
];


const marksData = { labels, datasets };

let chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    angleLines: {
      display: true,
      color: colorLines,
      lineWidth: 2
    },
    gridLines: {
      display: true,
      color: colorLines,
      lineWidth: 2
    },
    ticks: {
      display: true,
      beginAtZero: true,
      min: 1,
      max: 5,
      stepSize: 1,
      fontSize: 24,
      fontColor: 'white',
      backdropColor: 'rgb(24,22,22)',
    },
    pointLabels: {
      fontSize: 24,
      fontColor: colorText
    }
  },
  legend: {
    display: false,
  },
};

// new Chart(radialCanvas, {
//   type: 'radar',
//   data: marksData,
//   options: chartOptions
// });

//console.log(instance.data.datasets[0].data);

function radialDiagram(values = null) {
  if (!instance) {
    const radialCanvas = document.getElementById('radial_diagram').getContext('2d');
    instance = new Chart(radialCanvas, {
      type: 'radar',
      data: marksData,
      options: chartOptions
    });
  } else if (values) {
    instance.data.datasets[0].data = values;
    instance.update();
  }
}
