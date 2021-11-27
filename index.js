// Search feild DOM element, element value, DOM button element //
const userSearchEL = document.querySelector("#user-form");
const citySearchInput = document.querySelector("#city");
const submitBtn = document.querySelector(".button");
const localBtn = document.querySelector(".data-button")
// DOM elements to display
// City, Tempature, Wind, Humidity, UV Index,  //
const citySearchDisplay = document.querySelector(".city");
const cityTempDisplay = document.querySelector("#temp");
const cityWindDispay = document.querySelector("#wind");
const cityHumidityDisplay = document.querySelector("#humidity");
const cityUVindexDisplay = document.querySelector("#uvi");

// Listen for user submision and then fetch the data //
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&appid=9c66b2e77274737adc119b1bd2f997a7&units=Imperial`
  )
    .then((response) => response.json())
    .then((data) => {
      let cityValue = citySearchInput.value;
      let tempValue = data["main"]["temp"];
      let windValue = data["wind"]["speed"];
      let humidityValue = data["main"]["humidity"];
      let lat =  data["coord"]["lat"]
      let lon = data["coord"]["lon"]
      citySearchDisplay.innerText = cityValue;
      cityTempDisplay.innerText = tempValue;
      cityWindDispay.innerText = windValue;
      cityHumidityDisplay.innerText = humidityValue;
      localStorage.setItem("cityvalue",cityValue)
      var cities = [];
      let store = (cityValue) => {
      cities.push(store);
      localStorage.setItem("cities",JSON.stringify(cities))
  }
      localBtn.innerText = store[cities]

  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=` +
      lat +`&lon=` + lon + 
        `&appid=9c66b2e77274737adc119b1bd2f997a7&units=imperial`
      )
      .then((response) => response.json())
      .then((data) => {
        let uviValue = data["current"]["uvi"];
        let fiveDay = data["daily"]
        let days = []
        days.push(fiveDay) 
        for (let days =0; days <= 6; days++) {
          days += fiveDay[days]
        }
        cityUVindexDisplay.innerText = uviValue;
        
      })
    })  .catch((err) => console.log(err));
});







// // Listen for user submision and then fetch the data //
// localBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value}&appid=9c66b2e77274737adc119b1bd2f997a7&units=Imperial`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       let cityValue = citySearchInput.value;
//       let tempValue = data["main"]["temp"];
//       let windValue = data["wind"]["speed"];
//       let humidityValue = data["main"]["humidity"];
//       let lat =  data["coord"]["lat"]
//       let lon = data["coord"]["lon"]
//       citySearchDisplay.innerText = cityValue;
//       cityTempDisplay.innerText = tempValue;
//       cityWindDispay.innerText = windValue;
//       cityHumidityDisplay.innerText = humidityValue;
//   fetch(
//     `https://api.openweathermap.org/data/2.5/onecall?lat=` +
//       lat +`&lon=` + lon + 
//         `&appid=9c66b2e77274737adc119b1bd2f997a7&units=imperial`
//       )
//       .then((response) => response.json())
//       .then((data) => {
//         let uviValue = data["current"]["uvi"];
//         cityUVindexDisplay.innerText = uviValue;
//       })
//     })  .catch((err) => console.log(err));
// });
