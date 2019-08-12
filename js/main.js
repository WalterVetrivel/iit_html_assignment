const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdown = document.querySelector('.nav-dropdown');

let isDropdownVisible = false;

const toggleDropdown = () => {
	if (!isDropdownVisible) dropdown.classList.add('show-dropdown');
	else dropdown.classList.remove('show-dropdown');
	isDropdownVisible = !isDropdownVisible;
};

dropdownToggle.addEventListener('click', toggleDropdown);

const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');

let isNavVisible = false;

const toggleNav = () => {
	if (!isNavVisible) navItems.classList.add('show-nav');
	else navItems.classList.remove('show-nav');
	isNavVisible = !isNavVisible;
};

navToggle.addEventListener('click', toggleNav);
