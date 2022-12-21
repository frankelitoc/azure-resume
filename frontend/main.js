window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCounter();
})

const functionApi = '';

 const getVisitCounter = () => {

    let count = 30;

    fetch(functionApi).then(response => {

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