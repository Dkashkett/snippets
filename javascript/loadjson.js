const path = '../../folder/data.json'

async function getData(path) {
    const resp = await fetch(path);
    const data = await resp.json();
    console.log(data);
}

getData();