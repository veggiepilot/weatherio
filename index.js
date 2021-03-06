const userSearchEL = document.querySelector("#user-form");
const fiveDay = document.querySelector("#fiveDay");
const citySearchInput = document.querySelector("#city");
const submitBtn = document.querySelector(".button");
const localBtn = document.querySelector(".data-button");
const savedCityValueButtons = document.querySelector("#citySave");
const currentWeather = document.querySelector("#currentWeather");
const apiId = "&appid=9c66b2e77274737adc119b1bd2f997a7";

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value},840${apiId}&units=Imperial`
  )
    .then((response) => response.json())
    .then((data) => {
      const citySearchDisplay = document.querySelector(".city");
      const cityTempDisplay = document.querySelector("#temp");
      const cityWindDispay = document.querySelector("#wind");
      const cityHumidityDisplay = document.querySelector("#humidity");
      let cityValue = citySearchInput.value;
      let tempValue = data["main"]["temp"];
      let windValue = data["wind"]["speed"];
      let humidityValue = data["main"]["humidity"];
      let lat = data["coord"]["lat"];
      let lon = data["coord"]["lon"];
      localStorage.setItem("cityvalue", cityValue);
      citySearchDisplay.innerText = cityValue;
      cityTempDisplay.innerText = tempValue;
      cityWindDispay.innerText = windValue;
      cityHumidityDisplay.innerText = humidityValue;
      savedCityValueButtons.classList.remove("is-hidden");
      localBtn.innerText = cityValue;
      fiveDay.classList.remove("is-hidden");
      currentWeather.classList.remove("is-hidden");
      var cities = [];
      let store = () => {
        cities.push(store);
        localStorage.setItem("cities", JSON.stringify(cities));
      };

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=` +
          lat +
          `&lon=` +
          lon +
          `&appid=9c66b2e77274737adc119b1bd2f997a7&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => {
          const cityUVindexDisplay = document.querySelector("#uvi");
          let uviValue = data["current"]["uvi"];
          cityUVindexDisplay.innerText = uviValue;
        });

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchInput.value}${apiId}&units=Imperial`
      )
        .then((response) => response.json())

        .then((data) => {
          const fiveDayTempDisplay = document.querySelector("#t");
          const fiveDayWindDispay = document.querySelector("#w");
          const fiveDayHumidityDisplay = document.querySelector("#h");
          const fiveDayDateDisplay = document.querySelector("#date");
          const fiveDayImageDispay = document.querySelector("#img");

          let temp = data["list"][0]["main"]["temp"];
          let wind = data["list"][0]["wind"]["speed"];
          let humid = data["list"][0]["main"]["humidity"];

          if (data) {
            fiveDayTempDisplay.innerText = temp;
            fiveDayWindDispay.innerText = wind;
            fiveDayHumidityDisplay.innerText = humid;
          }
        });
      console.log(icon);
    })

    .catch((err) => console.log(err));
});

localBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${citySearchInput.value},840${apiId}&units=Imperial`
  )
    .then((response) => response.json())
    .then((data) => {
      let cityValue = citySearchInput.value;
      let tempValue = data["main"]["temp"];
      let windValue = data["wind"]["speed"];
      let humidityValue = data["main"]["humidity"];
      let lat = data["coord"]["lat"];
      let lon = data["coord"]["lon"];
      citySearchDisplay.innerText = cityValue;
      cityTempDisplay.innerText = tempValue;
      cityWindDispay.innerText = windValue;
      cityHumidityDisplay.innerText = humidityValue;
      localStorage.setItem("cityvalue", cityValue);
      var cities = [];
      let store = () => {
        cities.push(store);
        localStorage.setItem("cities", JSON.stringify(cities));
      };
      localBtn.innerText = cityValue;
      console.log(data);
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=` +
          lat +
          `&lon=` +
          lon +
          `&appid=9c66b2e77274737adc119b1bd2f997a7&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => {
          let uviValue = data["current"]["uvi"];
          cityUVindexDisplay.innerText = uviValue;
        });

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchInput.value}${apiId}&units=Imperial`
      )
        .then((response) => response.json())
        .then((data) => {
          let date = data["list"][0]["dt_txt"];
          let temp = data["list"][0]["main"]["temp"];
          let wind = data["list"][0]["wind"]["speed"];
          let humid = data["list"][0]["main"]["humidity"];
          let icon = data["weather"][0]["icon"];
          fiveDayTempDisplay.innerText = temp;
          fiveDayWindDispay.innerText = wind;
          fiveDayHumidityDisplay.innerText = humid;
          fiveDayDateDisplay.innerText = date;
          fiveDayImageDispay.innerText = icon;
        });
    })

    .catch((err) => console.log(err));
});
