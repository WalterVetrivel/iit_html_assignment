// ALL CODE IS WRITTEN BY WALTER VETRIVEL SELVAKUMAR

// IIFEs are used to avoid naming clashes and to prevent external scripts from interfering with the functionality

// For toggling the dropdown menu
(() => {
	const dropdownToggle = document.querySelector('.dropdown-toggle');
	const dropdown = document.querySelector('.nav-dropdown');

	let isDropdownVisible = false;

	const toggleDropdown = () => {
		// if dropdown is not shown, add the show-dropdown class to show it
		if (!isDropdownVisible) dropdown.classList.add('show-dropdown');
		// if dropdown is shown, remove the show-dropdown class to hide it
		else dropdown.classList.remove('show-dropdown');
		// invert the isDropdownVisible flag
		isDropdownVisible = !isDropdownVisible;
	};

	// Register click listener
	dropdownToggle.addEventListener('click', toggleDropdown);
})();

// For toggling the navigation on smaller screens
(() => {
	const navToggle = document.querySelector('.nav-toggle');
	const navItems = document.querySelector('.nav-items');

	let isNavVisible = false;

	const toggleNav = () => {
		// if navigation is not shown, add the show-dropdown class to show it
		if (!isNavVisible) navItems.classList.add('show-nav');
		// if navigation is shown, remove the show-dropdown class to hide it
		else navItems.classList.remove('show-nav');
		// invert the isNavVisible flag
		isNavVisible = !isNavVisible;
	};

	// Register click listener
	navToggle.addEventListener('click', toggleNav);
})();
