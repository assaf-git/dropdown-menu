import "./style.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const dropdownButtons = document.querySelectorAll(".dropdown-button");

// Toggle dropdown open/close when dropdown button is clicked
dropdownButtons.forEach(button => {
  const menu = button.nextElementSibling;
  const arrow = button.querySelector("#arrow");
  
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    // Close other dropdowns when one is clicked
    dropdownButtons.forEach(otherButton => {
      const otherMenu = otherButton.nextElementSibling;
      const otherArrow = otherButton.querySelector("#arrow");
      if (otherButton !== button && otherMenu.classList.contains("show")) {
        closeToggleDropdown(otherMenu, otherArrow);
      }  
    });
    toggleDropdown(menu, arrow);
  });
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener('click', () => {
  dropdownButtons.forEach(button => {
    const menu = button.nextElementSibling;
    const arrow = button.querySelector("#arrow");
    if (menu.classList.contains("show")) {
      closeToggleDropdown(menu, arrow);
    }
  });
});

// Toggle dropdown function
const toggleDropdown = (menu, arrow) => {
  menu.classList.toggle("show");
  arrow.classList.toggle("bx-chevron-down");
  arrow.classList.toggle("bx-chevron-up");
}

// Close dropdown function
const closeToggleDropdown = (menu, arrow) => {
  menu.classList.remove("show");
  arrow.classList.add("bx-chevron-down");
  arrow.classList.remove("bx-chevron-up");
}