console.log('I am alive');

const GetData = () => {
const targetElement = document.getElementById('data');
fetch('http://127.0.0.1:8080/public/data.txt')
.then(response => response.text())
.then(data => targetElement.innerText = data)
.catch(error => console.log(error));
}

GetData();


const GetJsonData = () => {
    const targetElement = document.getElementById('dataJson');
    fetch('http://127.0.0.1:8080/public/data.json')
    .then(response => response.json())
    .then(data => targetElement.innerText = JSON.stringify(data))
    .catch(error => console.log(error));
    }
GetJsonData()