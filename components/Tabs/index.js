// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.




axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    const result = response.data;
    result.topics.forEach(topic => topicArr.appendChild(Tab(topic)));
}) 
.catch(error => {
    console.error(error)
});

function Tab(topic) {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = topic;
    
    return tabDiv;
}
const topicArr = document.querySelector('.topics');