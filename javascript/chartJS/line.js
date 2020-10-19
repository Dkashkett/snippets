// <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
// <canvas id="chart"></canvas>
const path = '../../static/appfolder/data.json'

async function makeTimeSeries(path) {
    
    //this first loads the json and pulls x and y values from the object
    const resp = await fetch(path);
    const data = await resp.json();
    const xArray = Object.values(data['Date']);
    const yArray = Object.values(data['Low']);

        
    //the code below sets the configuration of the chart
    const dataObject = {
        labels: xArray,
        datasets: [{
            data: yArray,
            label: 'Data Series Label',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            pointRadius:0,
        }]
    }
    const optionsObject = { 
        elements: { point: { hitRadius: 10, hoverRadius: 10 } },
        // scales: {yAxes:[{gridLines:{lineWidth: 0}}],
        // xAxes:[{gridLines:{lineWidth: 0}}]}
        }

    // the code below finally creates the chart 
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: dataObject,
        // Configuration options go here
        options: optionsObject
    });

}
    

makeTimeSeries(path);