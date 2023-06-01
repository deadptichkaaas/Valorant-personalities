document.addEventListener('DOMContentLoaded', function () {
	// CHECKED DEVICES ----------------------------------------------------------------------------------------------------------------------
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
		}
	};

	if (isMobile.any()) {
		document.body.classList.add('_touch');
		document.querySelector('.drop__list').classList.add('hidden');
	} else {
		document.body.classList.add('_pc');
	}



	// MENU BURGER -------------------------------------------------------------------------------------------------------------------------
	let mediaQuery992 = window.matchMedia('(max-width: 992px)');

	if (mediaQuery992.matches) {
		const iconMenu = document.querySelector('.menu__icon');
		const menuBody = document.querySelector('.topnav');

		if (iconMenu) {
			iconMenu.addEventListener('click', function (e) {
				iconMenu.classList.toggle('_active');
				menuBody.classList.toggle('_active');
			});
		}

		// ====================================================== ФУНКЦИИ ЗАКРЫТИЯ ДРУГИХ МЕНЮ ЕСЛИ ОТКРЫТО ОДНО ===========================================================
		function dropMenu(menuClass) {
			const topnavContent = document.querySelector(menuClass);

			if (!topnavContent.classList.contains('_active')) {
				closeOtherMenus(menuClass); // Закрыть другие меню
				topnavContent.classList.add('_active');
				topnavContent.classList.remove('hidden');
			} else {
				topnavContent.classList.remove('_active');
				topnavContent.classList.add('hidden');
			}
		}

		function closeOtherMenus(excludeMenuClass) {
			const allMenus = document.querySelectorAll('.dropdown-content');

			allMenus.forEach((menu) => {
				if (menu.classList.contains('_active') && menu !== excludeMenuClass) {
					menu.classList.remove('_active');
					menu.classList.add('hidden');
				}
			});
		}

		const topnavItemNews = document.querySelector('.topnav__item--news');
		const topnavItemDiscover = document.querySelector('.topnav__item--discover');

		topnavItemNews.addEventListener('click', function () {
			dropMenu('.dropdown-content--news');
		});

		topnavItemDiscover.addEventListener('click', function () {
			dropMenu('.dropdown-content--discover');
		});

	};
	// ============================================== FUNCTION'S ADDING ANIMATION AND SHOW MENU ============================================================================
	function showMenu(element, time) {
		if (document.body.classList.contains('_pc')) {
			// TIME IN MS
			if (element.classList.contains('hidden')) {
				element.style.height = '0';
				element.style.opacity = '0';
				element.classList.remove('hidden');

				setTimeout(function () {
					element.style.height = 'auto';
					element.style.opacity = '1';
				}, 10);
			} else {
				element.style.height = '0';
				element.style.opacity = '0';

				setTimeout(function () {
					element.classList.add('hidden');
				}, time);
			}
		} else {
			// HIDE WITHOUT TIME
			// if (element.classList.contains('hidden')) {
			// 	element.classList.remove('hidden');
			// } else {
			// 	element.classList.add('hidden');
			// };
			element.classList.toggle('hidden');
		};
	};

	// ==============================================================================================================================================================================

	let mediaMinQuery993 = window.matchMedia('(min-width: 993px)');

	const dropContent = Array.from(document.querySelectorAll('.dropdown-content'));
	const dropBtn = Array.from(document.querySelectorAll('.dropbtn'));


	function closeMenu(index) {
		for (let i = 0; i < dropContent.length; i++) {
			if (i !== index && !dropContent[i].classList.contains('hidden')) {
				if (i !== index) {
					dropContent[i].classList.add('hidden');
				}
			}
		}
	}

	if (mediaMinQuery993.matches) {
		dropBtn[1].addEventListener('click', () => {
			showMenu(dropContent[1], 300);
			closeMenu(1);
		});

		dropBtn[0].addEventListener('click', () => {
			showMenu(dropContent[0], 300);
			closeMenu(0);
		});
	}



	function profileClick() {
		if (window.innerWidth > 767) {
			if (dropContent[2].classList.contains('hidden')) {
				let start = Date.now(); // запомнить время начала
				let timer = setInterval(function () {
					// сколько времени прошло с начала анимации?
					let timePassed = Date.now() - start;
					if (timePassed >= 300) {
						clearInterval(timer); // закончить анимацию через 2 секунды
						return;
					}
					// отрисовать анимацию на момент timePassed, прошедший с начала анимации
					draw(timePassed);
				}, 20);
				// в то время как timePassed идёт от 0 до 2000
				// left изменяет значение от 0px до 400px
				function draw(timePassed) {
					dropContent[2].style.height = timePassed / 1.05 + 'px';
				}
			}
			// showMenu (dropContent[2], 300);
			if (dropContent[2].classList.contains('hidden')) {
				dropContent[2].style.opacity = '0';
				dropContent[2].classList.remove('hidden');

				setTimeout(function () {
					dropContent[2].style.opacity = '1';
				}, 200);
			} else {
				dropContent[2].style.opacity = '0';

				setTimeout(function () {
					dropContent[2].classList.add('hidden');
				}, 300);
			}
		} else {
			showMenu(dropContent[2], 0);
		};
	};

	dropBtn[2].addEventListener('click', () => {
		profileClick();
		if (window.innerWidth > 767) {
			closeMenu(2);
		}
	});

	document.addEventListener('click', function (event) {
		const targetElement = event.target;
		if (!targetElement.closest('.topnav__item--discover') && !targetElement.closest('.topnav__item--news') && !targetElement.closest('.topnav__item--profile')) {
			for (let i = 0; i < dropContent.length; i++) {
				dropContent[i].classList.add('hidden');
			}
		}
	});
	// ================ ФУНКЦИЯ ПЕРЕМЕШКИ СЛАЙДЕРОВ =====================================================
	function mixSlides() {
		const isShuffled = localStorage.getItem('isShuffled');

		if (isShuffled) {
			const allSlides = Array.from(document.querySelectorAll('.slide'));
			const totalSlides = allSlides.length;
			const halfSlides = Math.floor(totalSlides / 2);

			function getRandomIndex(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
			}

			const container = document.querySelector('.slide-track');

			for (let i = 0; i < halfSlides; i++) {
				const randomIndex = getRandomIndex(i + 1, totalSlides - 1); // Изменяем верхнюю и нижнюю границы случайного индекса
				const currentSlide = allSlides[i];
				const randomSlide = allSlides[randomIndex];

				// Перемещаем текущий слайд перед случайным слайдом в контейнере
				container.insertBefore(currentSlide, randomSlide);

				// Меняем местами текущий слайд и случайный слайд в массиве
				[allSlides[i], allSlides[randomIndex]] = [allSlides[randomIndex], allSlides[i]];
			}

			// Сохраняем информацию о перемешивании в локальном хранилище
			localStorage.setItem('isShuffled', true);
		}
	}

	mixSlides();

	// ================== SLIDER ===================================================================================
	let mediaQuery672 = window.matchMedia('(min-width: 672px)');

	if (mediaQuery672.matches) {
		const slider = document.querySelector('.slider-one');
		let isDown = false; // переменная будет использоваться для отслеживания состояния нажатия кнопки мыши. Когда кнопка мыши нажата, значение переменной будет true, в противном случае - false.
		let startX; // переменная будет хранить начальную позицию курсора мыши при нажатии кнопки.
		let scrollLeft; // переменная будет хранить начальное значение горизонтального смещения слайдера.

		slider.addEventListener('mousedown', (e) => {
			let rect = slider.getBoundingClientRect();

			isDown = true;
			slider.classList.add('active');
			startX = e.pageX - rect.left;
			scrollLeft = slider.scrollLeft;
		})

		slider.addEventListener('mouseleave', () => {
			isDown = false;
			slider.classList.remove('active');
		})

		slider.addEventListener('mouseup', () => {
			isDown = false;
			slider.classList.remove('active');
		})

		slider.addEventListener('mousemove', (e) => {
			let rect = slider.getBoundingClientRect();
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - rect.left;
			const walk = (x - startX) * 1.5;
			slider.scrollLeft = scrollLeft - walk;
		});

	} else {

		const slider = document.querySelector('.slider-one');
		let isDown = false;
		let startX;
		let scrollLeft;
		let x1 = null;
		let y1 = null;

		slider.addEventListener('mousedown', (e) => {
			handleMouseDown(e.pageX, slider.getBoundingClientRect());
		});

		slider.addEventListener('touchstart', (e) => {
			const touch = e.touches[0];
			handleMouseDown(touch.pageX, slider.getBoundingClientRect());
			x1 = touch.clientX;

			y1 = touch.clientY;
		});

		slider.addEventListener('touchmove', (e) => {
			const touch = e.touches[0];
			handleMouseMove(touch.pageX, slider.getBoundingClientRect());
			if (!x1 || !y1) {
				return false;
			}
			let x2 = touch.clientX;
			let y2 = touch.clientY;
			let xDiff = x1 - x2;
			let yDiff = y2 - y1;

			if (Math.abs(xDiff) < Math.abs(yDiff)) {
				if (yDiff > 0) {
					// console.log('bottom')
					window.scroll({
						top: -x2,
						left: 0,
						behavior: 'smooth'
					});
				} else {
					// console.log('top')
					window.scroll({
						top: x2,
						left: 0,
						behavior: 'smooth'
					});
				}
			}
		});

		slider.addEventListener('mouseleave', handleMouseLeave);

		slider.addEventListener('mouseup', handleMouseUp);

		slider.addEventListener('touchend', handleMouseUp);

		slider.addEventListener('mousemove', (e) => {
			handleMouseMove(e.pageX, slider.getBoundingClientRect());
		});



		function handleMouseDown(pageX, rect) {
			isDown = true;
			slider.classList.add('active');
			startX = pageX - rect.left;
			scrollLeft = slider.scrollLeft;
		}

		function handleMouseLeave() {
			isDown = false;
			slider.classList.remove('active');
		}

		function handleMouseUp() {
			isDown = false;
			slider.classList.remove('active');
		}

		function handleMouseMove(pageX, rect) {
			if (!isDown) return;
			event.preventDefault();
			const x = pageX - rect.left;
			const walk = (x - startX) * 1.5;
			slider.scrollLeft = scrollLeft - walk;
		}

	}




	// SLIDER 2


	if (mediaQuery672.matches) {
		let countSlides = 0;
		if (window.matchMedia('(min-width: 1577px)').matches) {
			countSlides = 3;
		} else if (window.matchMedia('(min-width: 1126px)').matches && window.matchMedia('(max-width: 1577px)').matches) {
			countSlides = 2;
		} else {
			countSlides = 1;
		}
		let offset = 0;
		const sliderLine = document.querySelector('.swiper-wrapper');
		const slide = document.querySelector('.swiper-slide');
		let width = slide.offsetWidth; // Получаем ширину первого слайда

		document.querySelector('.right__btn').addEventListener('click', function (e) {
			const slideCount = sliderLine.children.length;
			width = slide.offsetWidth; // Обновляем ширину слайда

			if (offset < (slideCount - countSlides) * width) {
				offset = offset + width;
			} else {
				offset = 0;
			}

			sliderLine.style.transform = `translateX(-${offset}px)`;
		});
	} else {


		if (!document.querySelector('.new__card').classList.contains.hidden) {
			const sliderTouch = document.querySelector('.swiper');
			const slideContainer = document.querySelector('.swiper-wrapper');
			const slides = document.querySelectorAll('.swiper-slide');

			let currentIndex = 0;
			sliderTouch.addEventListener('touchstart', function (e) {
				const firstTouch = e.touches[0];
				x1 = firstTouch.clientX;
				y1 = firstTouch.clientY;
			});

			sliderTouch.addEventListener('touchmove', function (e) {
				if (!x1) return false;
				let x2 = e.touches[0].clientX;
				let y2 = e.touches[0].clientY;
				let xDiff = x2 - x1;
				let yDiff = y2 - y1;
				const slideWidth = slides[0].offsetWidth;
				if (Math.abs(xDiff) > Math.abs(yDiff)) {
					if (xDiff > 0) {
						if (currentIndex > 0) {
							currentIndex--;
							const newPosition = -currentIndex * slideWidth;
							slideContainer.style.transform = `translateX(${newPosition}px)`;
						} else {
							currentIndex = slides.length - 1;
							const newPosition = -currentIndex * slideWidth;
							slideContainer.style.transform = `translateX(${newPosition}px)`;
						}

					} else {
						if (currentIndex < slides.length - 1) {
							currentIndex++;
							const newPosition = -currentIndex * slideWidth;
							slideContainer.style.transform = `translateX(${newPosition}px)`;
						} else {
							currentIndex = 0;
							newPosition = 0;
							slideContainer.style.transform = `translateX(${newPosition}px)`;
						}

					}
				}
				x1 = null;
				y1 = null;
			});
		}
	}

	// CONTENT
	const temps = document.querySelectorAll('.slide');
	let slides = Array.from(temps);

	// ======================= СОХРАНЕНИЕ ВЫБРАННОГО ЯЗЫКА В ПАМЯТЬ =======================================================

	const selectListItems = document.querySelectorAll('.drop__list-item');
	const LANGUAGE_STORAGE_KEY = 'selectedLanguage';

	// Обработчик события при выборе языка
	function handleLanguageChange(event) {
		const selectedLanguage = event.target.dataset.value;
		// Сохранение выбранного языка в локальное хранилище
		localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
		// Здесь вы можете выполнить необходимые действия при изменении языка

		const nameAbil = document.querySelectorAll('.card-nameabil');
		let description = document.querySelectorAll('.card-desc');

		if (selectedLanguage === 'eu') {
			nameAbil.forEach(element => {
				element.style.fontFamily = 'Druk Wide';
				element.style.fontWeight = 500;
				element.style.fontSize = 40 + 'px';
			});
			description.forEach(element => {
				element.style.fontFamily = 'Druk Wide';
				element.style.fontWeight = 500;
				element.style.fontSize = 24 + 'px';
			});
		}
		if (selectedLanguage === 'ua') {
			nameAbil.forEach(element => {
				element.style.fontFamily = 'Roboto Condensed';
				element.style.fontWeight = 700;
				element.style.fontSize = 52 + 'px';
			});
			description.forEach(element => {
				element.style.fontFamily = 'Roboto Condensed';
				element.style.fontWeight = 700;
				element.style.fontSize = 30 + 'px';
			});
		}
		if (selectedLanguage === 'ru') {
			nameAbil.forEach(element => {
				element.style.fontFamily = 'Roboto Condensed';
				element.style.fontWeight = 700;
				element.style.fontSize = 52 + 'px';
			});
			description.forEach(element => {
				element.style.fontFamily = 'Roboto Condensed';
				element.style.fontWeight = 700;
				element.style.fontSize = 30 + 'px';
			});
		}
	}

	// Добавление обработчика события к каждому элементу списка
	selectListItems.forEach((item) => {
		item.addEventListener('click', handleLanguageChange);
	});

	// Восстановление выбранного языка при загрузке страницы
	window.addEventListener('DOMContentLoaded', () => {
		const selectedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

		// Проверяем, есть ли сохраненный язык
		if (selectedLanguage) {
			// Находим элемент списка с выбранным языком
			const selectedListItem = document.querySelector(`[data-value="${selectedLanguage}"]`);

			// Проверяем, что элемент найден
			if (selectedListItem) {
				// Выполняем клик на выбранный элемент
				selectedListItem.click();
			}
		}
	});
	// ======================================================================================================================

	const allCard = document.querySelector('.new__card');

	slides.forEach(function (element, index) {
		element.addEventListener('click', function () {

			let date = element.dataset.name;
			const backGr = element.querySelector('.persona__bg');
			const name = element.querySelector('.name__title');
			const slideTrack = document.querySelector('.slide-track');
			const abItems = element.querySelectorAll('.ab-item');
			const abBox = element.querySelector('.abilities__box')

			if (allCard.classList.contains('hidden')) {
				slideTrack.style.animationPlayState = 'paused';
				backGr.style.backgroundColor = '#F8F8F8';
				name.style['-webkit-text-stroke-color'] = '#1F2326';
				abBox.style.backgroundColor = '#F8F8F8';
				abItems.forEach((item) => {
					item.style.filter = 'invert(100%)';
				});


			} else {
				slideTrack.style.animationPlayState = 'running';
				backGr.style.backgroundColor = '#1F2326';
				name.style['-webkit-text-stroke-color'] = '#F8F8F8';
				abBox.style.backgroundColor = '#1F2326';
				abItems.forEach((item) => {
					item.style.filter = 'invert(0%)';
				});
			}

			showMenu(allCard, 400);

			for (let i = 0; i < backGr.length; i++) {
				if (i !== index) {
					backGr[i].style.backgroundColor = '#1F2326';
					name[i].style['-webkit-text-stroke-color'] = '#FFF';
				}
			}

			const dropListItems = document.querySelectorAll('.drop__list-item');

			dropListItems.forEach((element) => {
				if (element.hasAttribute('data-selected')) {
					const selectedValue = element.dataset.value;
					switchAbilities(selectedValue, date);
				}
			});
		});
	});

	// ================================== ЦВЕТ ФОНА =====================================================================

	const allColor = document.querySelectorAll('.dropdown-content--profile a');
	const allSwiperBefore = document.querySelectorAll('.swiper__before');

	const colors = {
		orange: '#ff8a46',
		yellow: '#ffc446',
		green: '#46ff8d',
		blue: '#4687ff',
		violet: '#a646ff',
		pink: '#ff46b2'
	};

	function changeColor(color) {
		const mainSection = document.querySelector('.main__section');
		mainSection.style.backgroundColor = color;

		allSwiperBefore.forEach(function (elem) {
			elem.style.backgroundColor = color;
		});
	}

	allColor.forEach(function (element) {
		element.addEventListener('click', function () {
			const colorName = this.dataset.color;
			const color = colors[colorName];
			changeColor(color);
		});
	});

	if (window.innerWidth < 767) {

		function hideHeader() {
			if(!document.querySelector('.topnav').classList.contains('_active')){
				document.querySelector('.custom-select').style.opacity = '0';
				document.querySelector('.dropdown--profile').style.opacity = '0';
			} else {
				document.querySelector('.custom-select').style.opacity = '1';
				document.querySelector('.dropdown--profile').style.opacity = '1';
			}
		};

		document.querySelector('.menu__icon').addEventListener('click', hideHeader)

	}
});








