const userSearchEL = document.querySelector("#user-form");
const citySearchInput = document.querySelector("#city");
const citySearchString = document.querySelector(".title");
const fiveDayForecasyContainer = document.querySelector("#fiveday");


const userSubmisionQueryHandler =(e) => {
  e.preventDefault();
  var city = userSearchEL.ariaValueMax.trim();
  if (city) {
    gitCityWeather(city);
    citySearchString.value = "";
  }
};

const storedCityClickHandler= (e) => {
    var storedCityButton = document.createElement(`<dd></dd>`);
    storedCityButton.classList = 'btn'
}