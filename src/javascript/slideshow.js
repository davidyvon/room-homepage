import data from './data.json'

import mobileImage1 from '../assets/images/slideshow/mobile-image-hero-1.jpg'
import mobileImage2 from '../assets/images/slideshow/mobile-image-hero-2.jpg'
import mobileImage3 from '../assets/images/slideshow/mobile-image-hero-3.jpg'

import desktopImage1 from '../assets/images/slideshow/desktop-image-hero-1.jpg'
import desktopImage2 from '../assets/images/slideshow/desktop-image-hero-2.jpg'
import desktopImage3 from '../assets/images/slideshow/desktop-image-hero-3.jpg'

function showSlide() {
	const image = document.querySelector('.slide__image')
	const title = document.querySelector('.slide__title')
	const text = document.querySelector('.slide__text')

	const slideData = data
	const mobileImages = [mobileImage1, mobileImage2, mobileImage3]
	const desktopImages = [desktopImage1, desktopImage2, desktopImage3]

	let currentSlide = 0

	function updateData() {
		if (window.matchMedia('(min-width: 576px)').matches) {
			image.style.backgroundImage = `url(${desktopImages[currentSlide]})`
		} else {
			image.style.backgroundImage = `url(${mobileImages[currentSlide]})`
		}

		title.innerHTML = slideData[currentSlide].slideTitle
		text.innerHTML = slideData[currentSlide].slideText
	}

	function showPrev() {
		currentSlide -= 1
		if (currentSlide < 0) {
			currentSlide = slideData.length - 1
		}
		updateData()
	}

	function showNext() {
		currentSlide += 1
		if (currentSlide > slideData.length - 1) {
			currentSlide = 0
		}
		updateData()
	}

	function keyDownHandler(event) {
		if (event.keyCode === 37) {
			showPrev()
		} else if (event.keyCode === 39) {
			showNext()
		}
	}

	document.querySelector('.button--prev').addEventListener('click', showPrev)
	document.querySelector('.button--next').addEventListener('click', showNext)
	document.addEventListener('keydown', keyDownHandler)
}

showSlide()
export default showSlide
