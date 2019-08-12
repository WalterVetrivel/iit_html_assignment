const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.nav-dropdown');

let isDropdownVisible = false;

dropdownToggle.addEventListener('click', () => {
	if (!isDropdownVisible) dropdown.classList.add('show-dropdown');
	else dropdown.classList.remove('show-dropdown');
	isDropdownVisible = !isDropdownVisible;
});

const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');

let isNavVisible = false;

navToggle.addEventListener('click', () => {
	if (!isNavVisible) navItems.classList.add('show-nav');
	else navItems.classList.remove('show-nav');
	isNavVisible = !isNavVisible;
});
