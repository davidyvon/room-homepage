function showMenu() {
	const navigation = document.querySelector('.nav')

	function toggleMenu() {
		navigation.classList.toggle('show')
	}

	document.querySelector('.nav__control--open').addEventListener('click', toggleMenu)
	document.querySelector('.nav__control--close').addEventListener('click', toggleMenu)
}

showMenu()
export default showMenu
