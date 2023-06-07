document.addEventListener('DOMContentLoaded', function () {

	// ============================================================

	const select = document.querySelector('.drop__button');
	const dropList = document.querySelector('.drop__list');
	const selectItems = document.querySelectorAll('.drop__list-item');


	select.addEventListener('click', () => {
		dropList.classList.toggle('hidden');
	});

	selectItems.forEach((listItem) => {
		listItem.addEventListener('click', function () {

			select.dataset.value = this.dataset.value;
			select.textContent = this.textContent;

			// FOCUS ON ACTIVE ELEMENT
			selectItems.forEach((item) => {
				if (item !== this) {
					item.removeAttribute('data-selected');
				}
			});

			this.setAttribute('data-selected', '');
			// -------------------------------------------------
			let thisLang = listItem.dataset.value;


			// TOPMENU ====================================================================================
			lgame.textContent = topMenu[thisLang].lgame;
			lchamp.textContent = topMenu[thisLang].lchamp;
			lnews.innerHTML = topMenu[thisLang].lnews + `<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.5 5L6.53109 0.5L0.468911 0.5L3.5 5Z" fill="white" />
		</svg>`;

			ldropnews.forEach((link) => {
				link.textContent = topMenu[thisLang].ldropnews;
			});
			lpatchnotes.textContent = topMenu[thisLang].lpatchnotes;
			ldiscover.innerHTML = topMenu[thisLang].ldiscover + `<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3.5 5L6.53109 0.5L0.468911 0.5L3.5 5Z" fill="white" />
		</svg>`;
			ldropdiscover.forEach((link) => {
				link.textContent = topMenu[thisLang].ldropdiscover;
			});
			lesports.textContent = topMenu[thisLang].lesports;
			luniverse.textContent = topMenu[thisLang].luniverse;
			lshop.textContent = topMenu[thisLang].lshop;
			lsupport.textContent = topMenu[thisLang].lsupport;

			lcolor.innerHTML = `<img
		src="./elements/svg-element/icon-top-right.svg" alt="Icon Profile">` + topMenu[thisLang].lcolor + `<svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3.5 5L6.53109 0.5L0.468911 0.5L3.5 5Z" fill="white" />
	</svg>`;
			orange.textContent = topMenu[thisLang].orange;
			yellow.textContent = topMenu[thisLang].yellow;
			green.textContent = topMenu[thisLang].green;
			blue.textContent = topMenu[thisLang].blue;
			violet.textContent = topMenu[thisLang].violet;
			pink.textContent = topMenu[thisLang].pink;


			// MAIN MENU ======================================================================

			function stylePage() {
				const mainTitle = document.querySelector('.main__subscribe');

				if (thisLang !== 'eu') {
					mainTitle.style.fontFamily = 'Gilroy';
					mainTitle.style.fontWeight = 800;
					
					if (window.matchMedia('(min-width: 767px)').matches) {
						mainTitle.style.fontSize = '225px';
						mainTitle.style.padding = '0';
						mainTitle.style.paddingLeft = '66px';
					} else if (
						window.matchMedia('(min-width: 570px)').matches &&
						window.matchMedia('(max-width: 766px)').matches
					) {
						mainTitle.style.fontSize = '180px';
					} else if (window.matchMedia('(max-width: 570px)').matches) {
						mainTitle.style.fontSize = '130px';
					}
				} else {
					mainTitle.style.fontFamily = 'Druk Wide';
					mainTitle.style.fontWeight = 500;
					mainTitle.style.fontSize = 136 + 'px';
					mainTitle.style.paddingLeft = 155 + 'px';
					mainTitle.style.paddingRight = 66 + 'px';
				}
				if (window.matchMedia('(max-width: 720px)').matches) {
					mainTitle.style.padding = 0;
				}
			}
			stylePage();
			agents.textContent = mainMenu[thisLang].agents;

			sage1.textContent = person[thisLang].sage1;
			sage2.textContent = person[thisLang].sage2;
			gekko1.textContent = person[thisLang].gekko1;
			gekko2.textContent = person[thisLang].gekko2;
			jett1.textContent = person[thisLang].jett1;
			jett2.textContent = person[thisLang].jett2;
			cypher1.textContent = person[thisLang].cypher1;
			cypher2.textContent = person[thisLang].cypher2;
			reyna1.textContent = person[thisLang].reyna1;
			reyna2.textContent = person[thisLang].reyna2;
			chamber1.textContent = person[thisLang].chamber1;
			chamber2.textContent = person[thisLang].chamber2;
			viper1.textContent = person[thisLang].viper1;
			viper2.textContent = person[thisLang].viper2;
			breach1.textContent = person[thisLang].breach1;
			breach2.textContent = person[thisLang].breach2;
			skye1.textContent = person[thisLang].skye1;
			skye2.textContent = person[thisLang].skye2;
			sova1.textContent = person[thisLang].sova1;
			sova2.textContent = person[thisLang].sova2;
			neon1.textContent = person[thisLang].neon1;
			neon2.textContent = person[thisLang].neon2;
			omen1.textContent = person[thisLang].omen1;
			omen2.textContent = person[thisLang].omen2;
			raze1.textContent = person[thisLang].raze1;
			raze2.textContent = person[thisLang].raze2;
			yoru1.textContent = person[thisLang].yoru1;
			yoru2.textContent = person[thisLang].yoru2;
			brim1.textContent = person[thisLang].brim1;
			brim2.textContent = person[thisLang].brim2;
			kj1.textContent = person[thisLang].kj1;
			kj2.textContent = person[thisLang].kj2;
			kayo1.textContent = person[thisLang].kayo1;
			kayo2.textContent = person[thisLang].kayo2;
			fade1.textContent = person[thisLang].fade1;
			fade2.textContent = person[thisLang].fade2;
			harbor1.textContent = person[thisLang].harbor1;
			harbor2.textContent = person[thisLang].harbor2;
			astra1.textContent = person[thisLang].astra1;
			astra2.textContent = person[thisLang].astra2;
			phoenix1.textContent = person[thisLang].phoenix1;
			phoenix2.textContent = person[thisLang].phoenix2;


			function styleCountry() {
				const textCountry = document.querySelectorAll('.country__sub');

				if (thisLang !== 'eu') {
					textCountry.forEach(element => {
						element.style.fontFamily = 'Roboto Condensed';
						element.style.fontWeight = 700;
						element.style.fontSize = 30 + 'px';
					});
				} else {
					textCountry.forEach(element => {
						element.style.fontFamily = 'Druk Wide';
						element.style.fontWeight = 500;
						element.style.fontSize = 24 + 'px';
					});
				}
			}

			styleCountry();

			// --------------------------------------------
			if (!dropList.classList.contains('hidden')) {
				dropList.classList.add('hidden');
			}
			footerDesign.innerHTML = footer[thisLang].footerDesign;
			footerSub.innerHTML = footer[thisLang].footerSub;
			footerNick.innerHTML = footer[thisLang].footerNick;
			footerSub.appendChild(footerNick);
		})
	});

	// HIDE ELEM ON CLICK TO EMPTY SPACE
	document.addEventListener('click', function (e) {
		if (e.target !== select) {
			dropList.classList.add('hidden');
		}
	});
	
	
});


