// <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
// <canvas id="chart"></canvas>

const dataObject = {
    labels: "Africa",
    datasets: [
      {
        label: ["China"],
        backgroundColor: "rgba(255,221,50,0.2)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: 21269017,
          y: 5.245,
          r: 15
        }]
      }, {
        label: ["Denmark"],
        backgroundColor: "rgba(60,186,159,0.2)",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: 258702,
          y: 7.526,
          r: 10
        }]
      }
    ]
  }

  const optionsObject = {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }, scales: {
      yAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "Happiness"
        }
      }],
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "GDP (PPP)"
        }
      }]
    }
  }
  const ctx = document.getElementById("chart")
  const chart = new Chart(ctx, {
          type: 'bubble',
          data: dataObject,
          options: optionsObject,
      });