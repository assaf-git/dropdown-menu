import "./style.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const dropdownButton = document.querySelector(".dropdown-button");
const dropdownArrow = document.querySelector("#arrow");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle dropdown function
const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show");
  dropdownArrow.classList.toggle("bx-chevron-down");
  dropdownArrow.classList.toggle("bx-chevron-up");
}

// Toggle dropdown open/close when dropdown button is clicked
dropdownButton.addEventListener('click', (e) => {
  console.log("button clicked")
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener('click', () => {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});