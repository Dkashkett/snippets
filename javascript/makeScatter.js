<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>// load chartjs

const path = '../../folder/data.json'

async function makeScatter(dataFilePath) {
    //this first loads the json and pulls x and y values from the object
    const resp = await fetch(path);
    const data = await resp.json();
    const xs = Object.values(data['x']); 
    const ys = Object.values(data['y']);
    
    //this creates the weird data structure that chartjs scatter expects
    const dataArray = [];
    for(let i =0; i <xs.length; i ++){
        dataArray.push({x:xs[i],y:ys[i]})
    }
    
    //the code below creates the actual scatter chart
    const ctx = document.getElementById('myChart').getContext('2d');

    const scatterChart = new Chart(ctx, {
    type: 'scatter', 
    data: {
        datasets: [{
            label: 'Data Series Name',
            data: dataArray
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
    });
}

makeScatter(path);