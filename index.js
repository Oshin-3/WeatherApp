//references
const inputRef = document.querySelector('.searchField');
const searchButtonRef = document.querySelector('button[type="submit"]');
const tempRef = document.querySelector('.weather .temp');
const locationRef = document.querySelector('.weather .time_location p');
const timeRef = document.querySelector('.weather .time_location span');
const conditionTextRef = document.querySelector('.weather .weather_condition span');
const conditionIconRef = document.querySelector('.weather .weather_condition p img');
//

//Onclick get the location name
searchButtonRef.addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log(inputRef.value);
    fetchData(inputRef.value);
})
//

//make API call
function fetchData(location)
{
    fetch(`https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`)
        .then(function(res) {return res.json()})
        .then(data => updateWeatherDetails(data))
        .catch(function(e) {console.log(e)})
}
//

//update weather details in UI
function updateWeatherDetails(data)
{
    const tempC = data.current.temp_c;
    const conditionText = data.current.condition.text;
    const conditionIcon = data.current.condition.icon;
    const locationName = data.location.name;
    const dateTime = data.location.localtime;

    tempRef.innerText = tempC;
    conditionTextRef.innerText = conditionText;
    conditionIconRef.src = conditionIcon;
    locationRef.innerText = locationName;
    timeRef.innerText = dateTime;
}

