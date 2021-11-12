const userSearchEL = document.querySelector("#user-form");
const citySearchInput = document.querySelector("#city");
const citySearchString = document.querySelector(".title");
const fiveDayForecastContainer = document.querySelector("#fiveday");
const localStorage = localStorage;

const userSubmisionQueryHandler = (e) => {
  e.preventDefault();
  var city = userSearchEL.value.trim();
  if (city) {
    getCityWeather(city);
    citySearchString.value = "";
  } else {
  }
};

const storedCityClickHandler = (e) => {
  var storedCityButton = e.target.getAtrtribute("data-button");
  if (storedCityButton) {
    getStoredCityWeather(storedCityButton);
    renderFiveDay(getCityWeather)
  }
};

const getCityWeather = function (city) {
  var apiUrl =
    // "insert City apu url code" +
    city +
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCity(data, city);
          });
        } else {
          alert("error");
        }
      })
      .catch(function (err) {
        alert("Unable to Connect");
      });
};

const getCityTemp = function (temp) {
  var apiUrl =
    // "insert City apu url code" +
    temp +
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCity(data, temp);
          });
        } else {
          alert("Error");
        }
      })
      .catch(function (err) {
        alert("Unable to Connect");
      });
};

const getCityWind = function (wind) {
  var apiUrl =
    // "insert City apu url code" +
    wind +
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCity(data, wind);
          });
        } else {
          alert("Error");
        }
      })
      .catch(function (err) {
        alert("Unable to Connect");
      });
};

const getCityHumidity = function (humid) {
  var apiUrl =
    // "insert City apu url code" +
    humid +
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCity(data, humid);
          });
        } else {
          alert("error");
        }
      })
      .catch(function (err) {
        alert("Unable to Connect");
      });
};

const getCityUV = function (uv) {
  var apiUrl =
    // "insert City apu url code" +
    uv +
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayCity(data, uv);
          });
        } else {
          alert("error");
        }
      })
      .catch(function (err) {
        alert("Unable to Connect");
      });
};
