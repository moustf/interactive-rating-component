const checkbox = document.querySelector("#checkbox");
const stateSection = document.querySelector(".rating-state-section");
const thanksSection = document.querySelector(".thank-you-section");
const numbers = document.getElementsByClassName("numbers")[0];
const submitBtn = document.getElementById("submit");
const rateVariable = document.getElementsByClassName("rate-var")[0];

// ? Creating the event listener and function that is responsible for storing the number of stars in a variable.

numbers.addEventListener("click", function (e) {
  let starRate = Number.parseInt(e.target.textContent);
  rateVar(starRate);
});

// ? Creating the and function that is responsible for adding the number of rates to inside the rate var span.

function rateVar(starsNum) {
  rateVariable.textContent = `${starsNum}`;
}

// ? Creating the event listener and function that is responsible for changing the display property in the
// ? two sections.

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  stateSection.style.display = "none";
  thanksSection.style.display = "flex";
});

// ? Checking the local storage and call the function.

if (window.localStorage.getItem("lightTheme") == "on") {
  document.body.classList.toggle("light");
}

// ? Creating the event listener and the function that is responsible for changing the theme.

checkbox.addEventListener("change", (e) => {
  document.body.classList.toggle("light");
  addToLocalStorage();
});


// ? adding the theme to the local storage.

function addToLocalStorage() {
  if (document.body.classList.contains("light")) {
    window.localStorage.setItem("lightTheme", "on");
  } else {
    window.localStorage.setItem("lightTheme", "off");
  }
}


