const dropdownDesktopMenu = document.querySelector(".blog__dropdown");
const toggleDesktopArrow = document.querySelector(".blog__arrow-icon");

// Toggle dropdown function
const toggleDesktopDropdown = function () {
    dropdownDesktopMenu.classList.toggle("show");
    toggleDesktopArrow.classList.toggle("arrow--show");
};

dropdownDesktopMenu.addEventListener("mouseover", function (e) {
    e.stopPropagation();
    toggleDesktopDropdown();
});

dropdownDesktopMenu.addEventListener("mouseout", function () {
    if (dropdownDesktopMenu.classList.contains("show")) {
        toggleDesktopDropdown();
    }
});