const bg1 = document.getElementById('bar-graph1');
const doughnut1 = document.getElementById('doughnut1');

new Chart(bg1, {
  type: 'bar',
  data: {
    labels: ['Project 1', 'Project 2', 'Project 3', 'Others'],
    datasets: [
      {
        label: 'Hours spent',
        data: [8, 6, 12, 4],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: 'y',
    barThickness: 20,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(doughnut1, {
  type: 'doughnut',
  data: {
    labels: ['In Progress', 'Completed', 'Leads'],
    datasets: [
      {
        label: 'No. of jobs',
        data: [4, 10, 6],
        backgroundColor: ['rgb(159, 32, 66)', 'rgb(109, 211, 206)', 'rgb(37, 92, 153)'],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  },
});
