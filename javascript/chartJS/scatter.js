<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>// load chartjs

const path = '../../static/portfolio/data.json'

async function makeScatter(path) {
    
    //this first loads the json and pulls x and y values from the object
    const resp = await fetch(path);
    const data = await resp.json();
    const xArray = Object.values(data['Open']);
    const yArray = Object.values(data['Low']);

    // format the data 
    const formattedData = [];
    for(let i =0;i<xArray.length; i++) {
        formattedData.push({x:xArray[i],y:yArray[i]})
    }

        
    //the code below sets the configuration of the chart
    const dataObject = {
        labels: [],
        datasets: [{
            data: formattedData,
            label: 'Data Series Label',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
        }]
    }
    const optionsObject = { 
        elements: { point: { hitRadius: 10, hoverRadius: 10 } },
        // scales: {yAxes:[{gridLines:{lineWidth: 0}}],
        // xAxes:[{gridLines:{lineWidth: 0}}]}
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
        }

    // the code below finally creates the chart 
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'scatter',
        // The data for our dataset
        data: dataObject,
        // Configuration options go here
        options: optionsObject
    });

}
    

makeScatter(path);