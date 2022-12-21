window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCounter();
})

const functionApiUrl = "https://azureresumefrankie.azurewebsites.net/api/GetResumeCounter?code=8A8mAQbGZIk9TgQZDl8f8XxSSm6N6AGkA65kvCktKbmFAzFuelsfKA==";
const functionApi = 'http://localhost:7071/api/GetResumeCounter';

 const getVisitCounter = () => {

    let count = 30;

    fetch(functionApiUrl).then(response => {

        return response.json()
    }).then(response => {
        console.log("Counter API has been trigerred.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(erro){
        console.log(error);
    });
    return count;

 }