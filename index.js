// Search feild DOM element, element value, DOM button element //
const userSearchEL = document.querySelector("#user-form");
const citySearchInput = document.querySelector("#city");
const submitBtn = document.querySelector(".button");

// DOM elements to display
// City, Tempature, Wind, Humidity, UV Index,  //
const citySearchDisplay = document.querySelector(".title");
const cityTempDisplay = document.querySelector("#temp");
const cityWindDispay = document.querySelector("#wind");
const cityHumidityDisplay = document.querySelector("#humidity");
// const cityUVindexDisplay = document.querySelector("#uvi");

// Listen for user submision and then fetch the data //
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=` +
      citySearchInput.value +
      `&appid=9c66b2e77274737adc119b1bd2f997a7l`
  )
    .then((response) => response.json())
    .then((data) => {
      let cityValue = citySearchInput.value;
      let tempValue = data["main"]["temp"];
      let windValue = data["wind"]["speed"];
      let humidityValue = data["main"]["humidity"];
      citySearchDisplay.innerText = cityValue;
      cityTempDisplay.innerText = tempValue;
      cityWindDispay.innerText = windValue;
      cityHumidityDisplay.innerText = humidityValue;
    })
  // fetch(
  //   `https://api.openweathermap.org/data/2.5/onecall?lat=` +
  //     latitude +`&lon=` + longitude + 
  //       `&appid=9c66b2e77274737adc119b1bd2f997a7&units=imperial`
  //     )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let uviValue = data["current"]["uvi"];
  //       cityUVindexDisplay.innerText = uviValue;
  //     })
      .catch((err) => console.log(err));
});







//  Generate the Local Storage Saved City from the Click Event.
//  Diplay it on the page.

// const storedCityClickHandler = (e) => {
//   e.preventDefault();
//   var storedCityButton = e.target.getAtrtribute("data-button");
//   if (storedCityButton) {
//     getStoredCityWeather(storedCityButton.value);
//     renderFiveDay(getCityWeather);
//   }
// };
