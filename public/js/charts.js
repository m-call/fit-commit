const chartColor = ['rgba(61, 255, 116, 1)'];
let xLabels = [];
let scores = [];

// scores = [1, 2, 4, 5, 6, 9, 12, 20]; // temp scores data

async function getScores() {
  const response = await fetch('/api/scores/', {
    method: 'GET',
  });

  let scoresTemp = await response.json();

  for (let i = 0; i < scoresTemp.length; i++) {
    scores.push(scoresTemp[i].overall_score);
  }

  console.log(scores);
}

const graphAll = async () => {
  await getScores();

  let xLabels = [];
  for (let i = 0; i < scores.length; i++) {
    xLabels.push(i);
  }
  scoresData = {
    labels: xLabels,

    datasets: [
      {
        xAxisID: 'xAxis',
        yAxisID: 'yAxis',
        data: scores,
        label: 'Scores',
        fill: false,
        borderColor: 'rgba(255, 255, 0, 1)',
        showLine: true,
      },
    ],
  };

  let myChart = [];
  var ctx = document.getElementById('scores').getContext('2d');

  myChart = new Chart(ctx, {
    type: 'line',
    data: scoresData,
    options: {
      scales: {
        xAxis: {
          title: {
            text: '🏋️ Workouts 🏋️',
            display: true,
            color: 'white',
            font: {
              size: 26,
            },
          },
          grid: {
            color: 'gray',
            circular: true,
          },
          ticks: {
            color: 'white',
            font: {
              size: 20,
            },
          },
        },
        yAxis: {
          title: {
            text: '🎼 Score 🎼',
            display: true,
            color: 'white',
            font: {
              size: 26,
            },
          },
          grid: {
            color: 'gray',
            circular: true,
          },
          ticks: {
            color: 'white',
            font: {
              size: 20,
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
};

graphAll();
