const input = document.querySelector("#phone");
const countryData = window.intlTelInputGlobals.getCountryData();
const countryInput = document.querySelector("#address-country");
const iti = window.intlTelInput(input, {
  customContainer: "form__input form__phone",
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("us"));
  },
  utilsScript: "/intl-tel-input/js/utils.js?1690802026728", // just for formatting/placeholders etc
});

// set it's initial value
countryInput.value = iti.getSelectedCountryData().name;

// listen to the telephone input for changes
input.addEventListener("countrychange", () => {
  countryInput.value = iti.getSelectedCountryData().name;
});

// listen to the address dropdown for changes
countryInput.addEventListener("change", () => {
  iti.setCountry(this.value);
});
