window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApi = 'https://azureresumefrankie.azurewebsites.net/api/GetResumeCounter?code=8A8mAQbGZIk9TgQZDl8f8XxSSm6N6AGkA65kvCktKbmFAzFuelsfKA=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        console.log(document.getElementById('counter').innerText);
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}