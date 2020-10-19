// <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
// <canvas id="chart"></canvas>
const path = '../../static/portfolio/data.json'

async function makeBubble(path) {
    
    //this first loads the json and pulls x and y values from the object
    const resp = await fetch(path);
    const data = await resp.json();
    const xArray = Object.values(data['Open']);
    const yArray = Object.values(data['Low']);
    const rArray = Object.values(data['High'])

    // format the data 
    const formattedData = [];
    const bubbleScaler = 10
    for(let i =0;i<xArray.length; i++) {
        formattedData.push({x:xArray[i],y:yArray[i],r:rArray[i]/bubbleScaler})
    }
    //create color array
    
    const colorArray = [];
    for(let i = 0; i< formattedData.length; i++){
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const randomColor = "rgb(" + r + "," + g + "," + b + ")"
        colorArray.push(randomColor);
    }
  
    //the code below sets the configuration of the chart
    const dataObject = {
        labels: [],
        datasets: [{
            data: formattedData,
            label: 'Data Series Label',
            backgroundColor: colorArray,
            
       
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
        type: 'bubble',
        // The data for our dataset
        data: dataObject,
        // Configuration options go here
        options: optionsObject
    });

}
    

makeBubble(path);