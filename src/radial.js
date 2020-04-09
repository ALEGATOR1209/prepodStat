const radialCanvas = document.getElementById("radial_diagram").getContext("2d");

const labels = [
    "Доступність матеріалів",
    "Перелік питань",
    "Відповідність лаб. робіт",
    "РСО",
    "Перенесення занять",
    "Організація часу",
    "Змістовна якість",
    "Вимогливість",
    "Коректність",
    "Інформування",
    "Задоволення якістю",
];

const teachersFactory = (name, data) => ({
    label: name,
    backgroundColor: colorGraph,
    borderColor: colorLines,
    data,
    pointRadius: "0",
    borderWidth: "3",
});

const datasets = [
    teachersFactory("Стешин В. В.", Array(11).fill(0).map(() => Math.random() * 4 + 1))
];

const marksData = { labels, datasets };

let chartOptions = {
    scale: {
        angleLines: {
            display: true,
            color: colorLines,
        },
        gridLines: {
            display: true,
            color: colorLines,
        },
        ticks: {
            display: true,
            beginAtZero: true,
            min: 1,
            max: 5,
            stepSize: 1,
            fontSize: 18,
            fontColor: 'white',
            backdropColor: 'transparent'
        },
        pointLabels: {
            fontSize: 13,
            fontColor: colorText
        }
    },
    legend: {
        display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
};

new Chart(radialCanvas, {
    type: 'radar',
    data: marksData,
    options: chartOptions
});