// Data => Done
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");
const video = document.querySelector("video");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter The City Name: ");
    return;
  }

  //
  const city = inputBox.value;

  // Fetch Details

  const fetchData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=570ba5596d4e4888a61144938231302&q=${city}`
  );

  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // Displaying the data in HTML
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  temprature.innerHTML = data.current.temp_c;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
  if(weatherStatus.innerText == 'Mist' ){
    video.src = "assets/Cloudscape - 2166.mp4";
  }else if(weatherStatus.innerText == 'Sunny'){
    video.src = "assets/production ID_4652096 (1).mp4";
  }else if(weatherStatus.innerText == 'Clear'){
    video.src = "assets/Sky - 8016.mp4";
  }else if(weatherStatus.innerText == 'Overcast'){
    video.src = "assets/pexels-t-ladi-fotografi-5288342.mp4";
  }else if(weatherStatus.innerText == 'Partly cloudy'){
    video.src = "assets/Clouds - 17723.mp4";
  }
};