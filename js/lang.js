
const [lgame, lchamp, lnews, lpatchnotes, ldiscover, lesports, luniverse, lshop, lsupport, lcolor] = document.querySelectorAll('.topnav__item');

const ldropnews = document.querySelectorAll('.dropdown-content--news a'),
	ldropdiscover = document.querySelectorAll('.dropdown-content--discover a');

const [orange, yellow, green, blue, violet, pink] = document.querySelectorAll('.dropdown-content--profile a')

let topMenu = {
	eu: {
		lgame: 'GAME',
		lchamp: 'CHAMPIONS',
		lnews: 'NEWS ',
		ldropnews: 'LINK',
		lpatchnotes: 'PATCH NOTES',
		ldiscover: 'DISCOVER',
		ldropdiscover: 'LINK',
		lesports: 'ESPORTS',
		luniverse: 'UNIVERSE',
		lshop: 'SHOP',
		lsupport: 'SUPPORT',
		lcolor: 'BG COLOR',
		orange: 'Orange',
		yellow: 'Yellow',
		green: 'Green',
		blue: 'Blue',
		violet: 'Violet',
		pink: 'Pink'
	},

	ua: {
		lgame: 'ГРА',
		lchamp: 'ЧЕМПІОНИ',
		lnews: 'НОВИНИ',
		ldropnews: 'ПОСИЛАННЯ',
		lpatchnotes: 'ПРИМІТКА',
		ldiscover: 'РОЗВАГИ',
		ldropdiscover: 'ПОСИЛАННЯ',
		lesports: 'КІБЕРСПОРТ',
		luniverse: 'ВСЕСВІТ',
		lshop: 'МАГАЗИН',
		lsupport: 'ПІДТРИМКА',
		lcolor: 'КОЛІР ФОНУ',
		orange: 'Помаранчевий',
		yellow: 'Жовтий',
		green: 'Зелений',
		blue: 'Синій',
		violet: 'Фіолетовій',
		pink: 'Рожевий'
	},

	ru: {
		lgame: 'ИГРА',
		lchamp: 'ЧЕМПИОНЫ',
		lnews: 'НОВОСТИ',
		ldropnews: 'ССЫЛКА',
		lpatchnotes: 'ПРИМЕЧАНИЕ',
		ldiscover: 'РАЗВЛЕЧЕНИЯ',
		ldropdiscover: 'ССЫЛКА',
		lesports: 'КИБЕРСПОРТ',
		luniverse: 'ВСЕЛЕННАЯ',
		lshop: 'МАГАЗИН',
		lsupport: 'ПОМОЩЬ',
		lcolor: 'ЦВЕТ ФОНА',
		orange: 'Оранжевый',
		yellow: 'Жёлтый',
		green: 'Зелёный',
		blue: 'Синий',
		violet: 'Фиолетовый',
		pink: 'Розовый'
	}
};

const agents = document.querySelector('.sub__agents');

let mainMenu = {
	eu: {
		agents: 'AGENTS',

	},
	ua: {
		agents: 'АГЕНТИ',

	},
	ru: {
		agents: 'АГЕНТЫ',

	}
};


const [sage1, gekko1, jett1, cypher1, reyna1, chamber1, viper1, breach1, skye1, sova1, neon1, omen1, raze1, yoru1, brim1, kj1, kayo1, fade1, harbor1, astra1, phoenix1, sage2, gekko2, jett2, cypher2, reyna2, chamber2, viper2, breach2, skye2, sova2, neon2, omen2, raze2, yoru2, brim2, kj2, kayo2, fade2, harbor2, astra2, phoenix2] = document.querySelectorAll('.country__sub');

let person = {
	eu: {
		sage1: 'China',
		sage2: 'China',
		gekko1: 'USA',
		gekko2: 'USA',
		jett1: 'South Korea',
		jett2: 'South Korea',
		cypher1: 'Morocco',
		cypher2: 'Morocco',
		reyna1: 'Mexico',
		reyna2: 'Mexico',
		chamber1: 'France',
		chamber2: 'France',
		viper1: 'China',
		viper2: 'China',
		breach1: 'Sweden',
		breach2: 'Sweden',
		skye1: 'Australia',
		skye2: 'Australia',
		sova1: 'Russia',
		sova2: 'Russia',
		neon1: 'Philippines',
		neon2: 'Philippines',
		omen1: 'Oman',
		omen2: 'Oman',
		raze1: 'Brazil',
		raze2: 'Brazil',
		yoru1: 'Japan',
		yoru2: 'Japan',
		brim1: 'USA',
		brim2: 'USA',
		kj1: 'Germany',
		kj2: 'Germany',
		kayo1: 'Australia',
		kayo2: 'Australia',
		fade1: 'Turkey',
		fade2: 'Turkey',
		harbor1: 'India',
		harbor2: 'India',
		astra1: 'Ghana',
		astra2: 'Ghana',
		phoenix1: 'UK',
		phoenix2: 'UK'
	},
	ua: {
		sage1: 'Китай',
		sage2: 'Китай',
		gekko1: 'США',
		gekko2: 'США',
		jett1: 'Південна Корея',
		jett2: 'Південна Корея',
		cypher1: 'Марокко',
		cypher2: 'Марокко',
		reyna1: 'Мексика',
		reyna2: 'Мексика',
		chamber1: 'Франція',
		chamber2: 'Франція',
		viper1: 'Китай',
		viper2: 'Китай',
		breach1: 'Швеція',
		breach2: 'Швеція',
		skye1: 'Австралія',
		skye2: 'Австралія',
		sova1: 'Росія',
		sova2: 'Росія',
		neon1: 'Філіппіни',
		neon2: 'Філіппіни',
		omen1: 'Оман',
		omen2: 'Оман',
		raze1: 'Бразилія',
		raze2: 'Бразилія',
		yoru1: 'Японія',
		yoru2: 'Японія',
		brim1: 'США',
		brim2: 'США',
		kj1: 'Німеччина',
		kj2: 'Німеччина',
		kayo1: 'Австралія',
		kayo2: 'Австралія',
		fade1: 'Туреччина',
		fade2: 'Туреччина',
		harbor1: 'Індія',
		harbor2: 'Індія',
		astra1: 'Гана',
		astra2: 'Гана',
		phoenix1: 'Великобританія',
		phoenix2: 'Великобританія'
	},
	ru: {
		sage1: 'Китай',
		sage2: 'Китай',
		gekko1: 'США',
		gekko2: 'США',
		jett1: 'Южная Корея',
		jett2: 'Южная Корея',
		cypher1: 'Марокко',
		cypher2: 'Марокко',
		reyna1: 'Мексика',
		reyna2: 'Мексика',
		chamber1: 'Франция',
		chamber2: 'Франция',
		viper1: 'Китай',
		viper2: 'Китай',
		breach1: 'Швеция',
		breach2: 'Швеция',
		skye1: 'Австралия',
		skye2: 'Австралия',
		sova1: 'Россия',
		sova2: 'Россия',
		neon1: 'Филиппины',
		neon2: 'Филиппины',
		omen1: 'Оман',
		omen2: 'Оман',
		raze1: 'Бразилия',
		raze2: 'Бразилия',
		yoru1: 'Япония',
		yoru2: 'Япония',
		brim1: 'США',
		brim2: 'США',
		kj1: 'Германия',
		kj2: 'Германия',
		kayo1: 'Австралия',
		kayo2: 'Австралия',
		fade1: 'Турция',
		fade2: 'Турция',
		harbor1: 'Индия',
		harbor2: 'Индия',
		astra1: 'Гана',
		astra2: 'Гана',
		phoenix1: 'Великобритания',
		phoenix2: 'Великобритания'
	}
};

function switchAbilities(value, date) {
	const nameAbil = document.querySelectorAll('.card-nameabil');
	let description = document.querySelectorAll('.card-desc');
	let cardText = document.querySelectorAll('.card-p');
	let cardImg = document.querySelectorAll('.card-img img');

	switch (value) {
		case 'eu':

			nameAbil[0].textContent = 'BASIC';
			nameAbil[1].textContent = 'SIGNATURE';
			nameAbil[2].textContent = 'PASSIVE';
			nameAbil[3].textContent = 'ULTIMATE';

			switch (date) {
				// SAGE
				case 'SAGE':
					description[0].innerHTML = 'SLOW ORB';
					cardText[0].innerHTML = 'Fire to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.';
					cardImg[0].src = './personalities/Sage/ab-1.png'


					description[1].innerHTML = 'HEALING ORB';
					cardText[1].innerHTML = 'Fire with your crosshairs over a damaged ally to activate a heal-over-time on them. Alt fire while Sage is damaged to activate a self heal-over-time.';
					cardImg[1].src = './personalities/Sage/ab-2.png'

					description[2].innerHTML = 'BARRIER ORB';
					cardText[2].innerHTML = 'Fire places a solid wall. Alt fire rotates the targeter.';
					cardImg[2].src = './personalities/Sage/ab-3.png'

					description[3].innerHTML = 'RESURRECTION';
					cardText[3].innerHTML = 'Fire with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.';
					cardImg[3].src = './personalities/Sage/ab-4.png'
					break;

				// GEKKO
				case 'GEKKO':
					description[0].innerHTML = 'WINGMAN';
					cardText[0].innerHTML = 'Wingman searches for enemies. Wingman fires a concussive blast toward the first enemy he sees. Alt Fire Wingman sets up a spike.';
					cardImg[0].src = './personalities/Gekko/ab-1.png'


					description[1].innerHTML = 'DIZZY';
					cardText[1].innerHTML = 'Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are blinded.';
					cardImg[1].src = './personalities/Gekko/ab-2.png'

					description[2].innerHTML = 'MOSH PIT';
					cardText[2].innerHTML = 'Upon landing Mosh duplicates across a large area then after a short delay explodes.';
					cardImg[2].src = './personalities/Gekko/ab-3.png'

					description[3].innerHTML = 'THRASH';
					cardText[3].innerHTML = 'Thrash’s mind and steer her through enemy territory ACTIVATE to lunge forward and explode, detaining any enemies in a small radius.';
					cardImg[3].src = './personalities/Gekko/ab-4.png'
					break;

				// JETT
				case 'JETT':
					description[0].innerHTML = 'UPDRAFT';
					cardText[0].innerHTML = 'INSTANTLY propel Jett high into the air.';
					cardImg[0].src = './personalities/Jett/ab-1.png'


					description[1].innerHTML = 'TAILWIND';
					cardText[1].innerHTML = 'ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving.';
					cardImg[1].src = './personalities/Jett/ab-2.png'

					description[2].innerHTML = 'CLOUDBURST';
					cardText[2].innerHTML = 'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface.';
					cardImg[2].src = './personalities/Jett/ab-3.png'

					description[3].innerHTML = 'BLADE STORM';
					cardText[3].innerHTML = 'EQUIP a set of highly accurate knives that recharge on killing an opponent.';
					cardImg[3].src = './personalities/Jett/ab-4.png'
					break;

				// CYPHER
				case 'CYPHER':
					description[0].innerHTML = 'CYBER CAGE';
					cardText[0].innerHTML = 'INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.';
					cardImg[0].src = './personalities/Cypher/ab-1.png'


					description[1].innerHTML = 'SPYCAM';
					cardText[1].innerHTML = 'EQUIP a spycam. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.';
					cardImg[1].src = './personalities/Cypher/ab-2.png'

					description[2].innerHTML = 'TRAPWIRE';
					cardText[2].innerHTML = 'EQUIP a trapwire. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time.';
					cardImg[2].src = './personalities/Cypher/ab-3.png'

					description[3].innerHTML = 'NEURAL THEFT';
					cardText[3].innerHTML = 'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.';
					cardImg[3].src = './personalities/Cypher/ab-4.png'
					break;

				// REYNA
				case 'REYNA':
					description[0].innerHTML = 'DEVOUR';
					cardText[0].innerHTML = 'INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time.';
					cardImg[0].src = './personalities/Reyna/ab-1.png'


					description[1].innerHTML = 'DISMISS';
					cardText[1].innerHTML = 'INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.';
					cardImg[1].src = './personalities/Reyna/ab-2.png'

					description[2].innerHTML = 'LEER';
					cardText[2].innerHTML = 'EQUIP an ethereal destructible eye. The eye will Nearsight all enemies who look at it.';
					cardImg[2].src = './personalities/Reyna/ab-3.png'

					description[3].innerHTML = 'EMPRESS';
					cardText[3].innerHTML = 'INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.';
					cardImg[3].src = './personalities/Reyna/ab-4.png'
					break;

				case 'CHAMBER':
					description[0].innerHTML = 'HEADHUNTER';
					cardText[0].innerHTML = 'ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.';
					cardImg[0].src = './personalities/Chamber/ab-1.png'


					description[1].innerHTML = 'RENDEZVOUS';
					cardText[1].innerHTML = 'PLACE a teleport anchor. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor.';
					cardImg[1].src = './personalities/Chamber/ab-2.png'

					description[2].innerHTML = 'TRADEMARK';
					cardText[2].innerHTML = 'PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.';
					cardImg[2].src = './personalities/Chamber/ab-3.png'

					description[3].innerHTML = 'TOUR DE FORCE';
					cardText[3].innerHTML = 'ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit.';
					cardImg[3].src = './personalities/Chamber/ab-4.png'
					break;

				case 'VIPER':
					description[0].innerHTML = 'POISON CLOUD';
					cardText[0].innerHTML = 'EQUIP a gas emitter. RE-USE the ability to create a toxic gas cloud at the cost of fuel.';
					cardImg[0].src = './personalities/Viper/ab-1.png'


					description[1].innerHTML = 'TOXIC SCREEN';
					cardText[1].innerHTML = 'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel.';
					cardImg[1].src = './personalities/Viper/ab-2.png'

					description[2].innerHTML = 'SNAKE BITE';
					cardText[2].innerHTML = 'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.';
					cardImg[2].src = './personalities/Viper/ab-3.png'

					description[3].innerHTML = 'VIPER’S PIT';
					cardText[3].innerHTML = 'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.';
					cardImg[3].src = './personalities/Viper/ab-4.png'
					break;

				case 'BREACH':
					description[0].innerHTML = 'FLASHPOINT';
					cardText[0].innerHTML = 'EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.';
					cardImg[0].src = './personalities/Breach/ab-1.png'


					description[1].innerHTML = 'FAULT LINE';
					cardText[1].innerHTML = 'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.';
					cardImg[1].src = './personalities/Breach/ab-2.png'

					description[2].innerHTML = 'AFTERSHOCK';
					cardText[2].innerHTML = 'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.';
					cardImg[2].src = './personalities/Breach/ab-3.png'

					description[3].innerHTML = 'ROLLING THUNDER';
					cardText[3].innerHTML = 'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.';
					cardImg[3].src = './personalities/Breach/ab-4.png'
					break;

				case 'SKYE':
					description[0].innerHTML = 'TRAILBLAZER';
					cardText[0].innerHTML = 'FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast.';
					cardImg[0].src = './personalities/Skye/ab-1.png'


					description[1].innerHTML = 'GUIDING LIGHT';
					cardText[1].innerHTML = 'RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.';
					cardImg[1].src = './personalities/Skye/ab-2.png'

					description[2].innerHTML = 'REGROWTH';
					cardText[2].innerHTML = 'HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted.';
					cardImg[2].src = './personalities/Skye/ab-3.png'

					description[3].innerHTML = 'SEEKERS';
					cardText[3].innerHTML = 'FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.';
					cardImg[3].src = './personalities/Skye/ab-4.png'
					break;

				case 'SOVA':
					description[0].innerHTML = 'SHOCK BOLT';
					cardText[0].innerHTML = 'FIRE to send the explosive forward, detonating upon collision and damaging players nearby.';
					cardImg[0].src = './personalities/Sova/ab-1.png'


					description[1].innerHTML = 'RECON BOLT';
					cardText[1].innerHTML = 'FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt.';
					cardImg[1].src = './personalities/Sova/ab-2.png'

					description[2].innerHTML = 'OWL DRONE';
					cardText[2].innerHTML = 'FIRE to deploy and take control of movement of the drone. Dart will reveal the location of any player struck by the dart.';
					cardImg[2].src = './personalities/Sova/ab-3.png'

					description[3].innerHTML = 'HUNTER’S FURY';
					cardText[3].innerHTML = 'FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line.';
					cardImg[3].src = './personalities/Sova/ab-4.png'
					break;

				case 'NEON':
					description[0].innerHTML = 'RELAY BOLT';
					cardText[0].innerHTML = 'INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.';
					cardImg[0].src = './personalities/Neon/ab-1.png'


					description[1].innerHTML = 'HIGH GEAR';
					cardText[1].innerHTML = 'INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide.';
					cardImg[1].src = './personalities/Neon/ab-2.png'

					description[2].innerHTML = 'FAST LANE';
					cardText[2].innerHTML = 'Lines rise into walls of static electricity that block vision and damage enemies passing through them.';
					cardImg[2].src = './personalities/Neon/ab-3.png'

					description[3].innerHTML = 'OVERDRIVE';
					cardText[3].innerHTML = 'FIRE to channel the power into a deadly lightning beam with high movement accuracy.';
					cardImg[3].src = './personalities/Neon/ab-4.png'
					break;

				case 'OMEN':
					description[0].innerHTML = 'PARANOIA';
					cardText[0].innerHTML = 'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches.';
					cardImg[0].src = './personalities/Omen/ab-1.png'


					description[1].innerHTML = 'DARK COVER';
					cardText[1].innerHTML = 'FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision.';
					cardImg[1].src = './personalities/Omen/ab-2.png'

					description[2].innerHTML = 'SHROUDED STEP';
					cardText[2].innerHTML = 'FIRE to begin a brief channel, then teleport to the marked location.';
					cardImg[2].src = './personalities/Omen/ab-3.png'

					description[3].innerHTML = 'FROM THE SHADOWS';
					cardText[3].innerHTML = 'FIRE to begin teleporting to the selected location.';
					cardImg[3].src = './personalities/Omen/ab-4.png'
					break;

				case 'RAZE':
					description[0].innerHTML = 'BLAST PACK';
					cardText[0].innerHTML = 'INSTANTLY throw a Blast Pack that will stick to surfaces. Detonate, damaging and moving anything hit.';
					cardImg[0].src = './personalities/Raze/ab-1.png'


					description[1].innerHTML = 'PAINT SHELLS';
					cardText[1].innerHTML = 'FIRE to throw the grenade, which does damage and creates sub-munitions.';
					cardImg[1].src = './personalities/Raze/ab-2.png'

					description[2].innerHTML = 'BOOM BOT';
					cardText[2].innerHTML = 'The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.';
					cardImg[2].src = './personalities/Raze/ab-3.png'

					description[3].innerHTML = 'SHOWSTOPPER';
					cardText[3].innerHTML = 'FIRE shoots a rocket that does massive area damage on contact with anything.';
					cardImg[3].src = './personalities/Raze/ab-4.png'
					break;

				case 'YORU':
					description[0].innerHTML = 'BLINDSIDE';
					cardText[0].innerHTML = 'FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world';
					cardImg[0].src = './personalities/Yoru/ab-1.png'


					description[1].innerHTML = 'GATECRASH';
					cardText[1].innerHTML = 'ACTIVATE to teleport to the tether`s location USE to trigger a fake teleport.';
					cardImg[1].src = './personalities/Yoru/ab-2.png'

					description[2].innerHTML = 'FAKEOUT';
					cardText[2].innerHTML = 'FIRE to instantly activate the mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.';
					cardImg[2].src = './personalities/Yoru/ab-3.png'

					description[3].innerHTML = 'DIMENSIONAL DRIFT';
					cardText[3].innerHTML = 'EQUIP a mask that can see between dimensions. FIRE to drift into Yoru`s dimension, unable to be affected or seen by enemies from the outside';
					cardImg[3].src = './personalities/Yoru/ab-4.png'
					break;

				case 'BRIMSTONE':
					description[0].innerHTML = 'INCENDIARY';
					cardText[0].innerHTML = 'FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.';
					cardImg[0].src = './personalities/Brimstone/ab-1.png'


					description[1].innerHTML = 'SKY SMOKE';
					cardText[1].innerHTML = 'FIRE to set locations where Brimstone’s smoke clouds will land. Long-lasting smoke clouds that block vision in the selected area.';
					cardImg[1].src = './personalities/Brimstone/ab-2.png'

					description[2].innerHTML = 'STIM BEACON';
					cardText[2].innerHTML = 'FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.';
					cardImg[2].src = './personalities/Brimstone/ab-3.png'

					description[3].innerHTML = 'ORBITAL STRIKE';
					cardText[3].innerHTML = 'FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.';
					cardImg[3].src = './personalities/Brimstone/ab-4.png'
					break;

				case 'KJ':
					description[0].innerHTML = 'ALARMBOT';
					cardText[0].innerHTML = 'FIRE to deploy a bot that hunts down enemies that get in range.';
					cardImg[0].src = './personalities/Killjoy/ab-1.png'


					description[1].innerHTML = 'TURRET';
					cardText[1].innerHTML = 'FIRE to deploy a turret that fires at enemies in a 180 degree cone.';
					cardImg[1].src = './personalities/Killjoy/ab-2.png'

					description[2].innerHTML = 'NANOSWARM';
					cardText[2].innerHTML = 'FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.';
					cardImg[2].src = './personalities/Killjoy/ab-3.png'

					description[3].innerHTML = 'LOCKDOWN';
					cardText[3].innerHTML = 'FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.';
					cardImg[3].src = './personalities/Killjoy/ab-4.png'
					break;

				case 'KAYO':
					description[0].innerHTML = 'FLASH/DRIVE';
					cardText[0].innerHTML = 'The flash grenade explodes after a short fuse, blinding anyone in line of sight.';
					cardImg[0].src = './personalities/Kayo/ab-1.png'


					description[1].innerHTML = 'ZERO/POINT';
					cardText[1].innerHTML = 'The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.';
					cardImg[1].src = './personalities/Kayo/ab-2.png'

					description[2].innerHTML = 'FRAG/MENT';
					cardText[2].innerHTML = 'The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.';
					cardImg[2].src = './personalities/Kayo/ab-3.png'

					description[3].innerHTML = 'NULL/CMD';
					cardText[3].innerHTML = 'Large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration.';
					cardImg[3].src = './personalities/Kayo/ab-4.png'
					break;

				case 'FADE':
					description[0].innerHTML = 'SEIZE';
					cardText[0].innerHTML = 'Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means.';
					cardImg[0].src = './personalities/Fade/ab-1.png'


					description[1].innerHTML = 'HAUNT';
					cardText[1].innerHTML = 'Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight.';
					cardImg[1].src = './personalities/Fade/ab-2.png'

					description[2].innerHTML = 'PROWLER';
					cardText[2].innerHTML = 'The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them.';
					cardImg[2].src = './personalities/Fade/ab-3.png'

					description[3].innerHTML = 'NIGHTFALL';
					cardText[3].innerHTML = 'FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.';
					cardImg[3].src = './personalities/Fade/ab-4.png'
					break;

				case 'HARBOR':
					description[0].innerHTML = 'COVE';
					cardText[0].innerHTML = 'Upon impacting the ground, spawn a destructible water shield that blocks bullets.';
					cardImg[0].src = './personalities/Harbor/ab-1.png'


					description[1].innerHTML = 'HIGH TIDE';
					cardText[1].innerHTML = 'FIRE to send the water forward along the ground. Players hit are SLOWED.';
					cardImg[1].src = './personalities/Harbor/ab-2.png'

					description[2].innerHTML = 'CASCADE';
					cardText[2].innerHTML = 'FIRE to send the wave rolling forward and through walls. RE- USE to stop the wave. Players hit are SLOWED.';
					cardImg[2].src = './personalities/Harbor/ab-3.png'

					description[3].innerHTML = 'RECKONING';
					cardText[3].innerHTML = 'FIRE to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes.';
					cardImg[3].src = './personalities/Harbor/ab-4.png'
					break;

				case 'ASTRA':
					description[0].innerHTML = 'NOVA PULSE';
					cardText[0].innerHTML = 'The Nova Pulse charges briefly then strikes, concussing all players in its area.';
					cardImg[0].src = './personalities/Astra/ab-1.png'


					description[1].innerHTML = 'NEBULA';
					cardText[1].innerHTML = 'Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning.';
					cardImg[1].src = './personalities/Astra/ab-2.png'

					description[2].innerHTML = 'GRAVITY WELL';
					cardText[2].innerHTML = 'ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.';
					cardImg[2].src = './personalities/Astra/ab-3.png'

					description[3].innerHTML = 'ASTRAL FORM / COSMIC DIVIDE';
					cardText[3].innerHTML = 'An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.';
					cardImg[3].src = './personalities/Astra/ab-4.png'
					break;

				case 'PHOENIX':
					description[0].innerHTML = 'CURVEBALL';
					cardText[0].innerHTML = 'Flare orb detonating and blinding any player who sees the orb.';
					cardImg[0].src = './personalities/Phoenix/ab-1.png'


					description[1].innerHTML = 'HOT HANDS';
					cardText[1].innerHTML = 'FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.';
					cardImg[1].src = './personalities/Phoenix/ab-2.png'

					description[2].innerHTML = 'BLAZE';
					cardText[2].innerHTML = 'FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it.';
					cardImg[2].src = './personalities/Phoenix/ab-3.png'

					description[3].innerHTML = 'RUN IT BACK';
					cardText[3].innerHTML = 'While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.';
					cardImg[3].src = './personalities/Phoenix/ab-4.png'
					break;
				default:
					showMenu(allCard, 400);
			}
			break;

		case 'ua':

			nameAbil[0].textContent = 'БАЗОВА';
			nameAbil[1].textContent = 'СИГНАТУРА';
			nameAbil[2].textContent = 'ПАСИВНА';
			nameAbil[3].textContent = 'УЛЬТІМЕЙТ';

			switch (date) {
				// SAGE
				case 'SAGE':
					description[0].innerHTML = 'СФЕРА УПОВЛЬНЕННЯ';
					cardText[0].innerHTML = 'Кидає уповільнюючу сферу вперед. Після падіння сфера створює поле, яке сповільнює гравців.';
					cardImg[0].src = './personalities/Sage/ab-1.png'


					description[1].innerHTML = 'СФЕРА ЛІКУВАННЯ';
					cardText[1].innerHTML = 'При активуванні на пораненому союзнику активує поступове відновлення здоров`я. Також можна активувати на собі.';
					cardImg[1].src = './personalities/Sage/ab-2.png'

					description[2].innerHTML = 'СФЕРА БАР`ЄРУ';
					cardText[2].innerHTML = 'Створює непрохідну стінку. Також можна повернути перед встановкою.';
					cardImg[2].src = './personalities/Sage/ab-3.png'

					description[3].innerHTML = 'ВОСКРЕСІННЯ';
					cardText[3].innerHTML = 'При активуванні на загиблому союзнику, гравець воскресає з повним запасом здоров`я';
					cardImg[3].src = './personalities/Sage/ab-4.png'
					break;

				// GEKKO
				case 'GEKKO':
					description[0].innerHTML = 'БІГУН';
					cardText[0].innerHTML = 'Бігун вивільняє енергію у бік першого побаченого ворога, здійснюючи приголомшливий вибух. Націлившись на точку встановлення спайку або на встановлений спайк, щоб Бігун встановив або знешкодив його.';
					cardImg[0].src = './personalities/Gekko/ab-1.png'


					description[1].innerHTML = 'КЛЯКСА';
					cardText[1].innerHTML = 'Зарядившись, Клякса запускає згустки плазми, що вибухають, у бік супротивників у зоні видимості.';
					cardImg[1].src = './personalities/Gekko/ab-2.png'

					description[2].innerHTML = 'ТИДИЩ';
					cardText[2].innerHTML = 'Торкнувшись поверхні, Тидищ розділяється, покриваючи велику площу, і після невеликої затримки вибухає.';
					cardImg[2].src = './personalities/Gekko/ab-3.png'

					description[3].innerHTML = 'БАБАХ';
					cardText[3].innerHTML = 'Встановлюється уявний зв`язок з Бабах та управлінням її пересуванням по ворожій території. Натисніть кнопку активації, щоб Бабах зробила ривок уперед і влаштувала вибух, уповільнивши ворогів на невеликій відстані від себе.';
					cardImg[3].src = './personalities/Gekko/ab-4.png'
					break;

				// JETT
				case 'JETT':
					description[0].innerHTML = 'ПІДЙОМ';
					cardText[0].innerHTML = 'Jett МИТТЄВО злітає у повітря.';
					cardImg[0].src = './personalities/Jett/ab-1.png'


					description[1].innerHTML = 'ПОПУТНИЙ ВІТЕР';
					cardText[1].innerHTML = 'Використовуйте вміння повторно, щоб Jett здійснила ривок в напрямку свого руху';
					cardImg[1].src = './personalities/Jett/ab-2.png'

					description[2].innerHTML = 'ВИХРЬ';
					cardText[2].innerHTML = 'МИТТЄВО кидає знаряд, що перетворюється в ненадовго зачиняючий огляд при зіткненні з поверхністю.';
					cardImg[2].src = './personalities/Jett/ab-3.png'

					description[3].innerHTML = 'БУРЯ КЛИНКІВ';
					cardText[3].innerHTML = 'Озброюється набором високоточних кінжалів, котрі перезаряджаються після ліквідації суперникаю';
					cardImg[3].src = './personalities/Jett/ab-4.png'
					break;

				// CYPHER
				case 'CYPHER':
					description[0].innerHTML = 'КИБЕРКЛІТКА';
					cardText[0].innerHTML = 'Ограничивает обзор проходящих через нее противников и замедляет их. Обмежує огляд проходячих через неї суперників та уповільнює їх.';
					cardImg[0].src = './personalities/Cypher/ab-1.png'


					description[1].innerHTML = 'КАМЕРА';
					cardText[1].innerHTML = 'Поміщає камеру в обраному місці. Використовуйте вміння знову, щоб керувати камерою. Під час керування камерою натисніть кнопку ВОГОНЬ, щоб вистрілити дротиком, що відстежує. При влучанні в гравця дротик відзначає його місцезнаходження.';
					cardImg[1].src = './personalities/Cypher/ab-2.png'

					description[2].innerHTML = 'РОЗСТЯЖКА';
					cardText[2].innerHTML = 'Встановити в обраному місці зруйновану непомітну розтяжку, що з`єднується з протилежною стіною. Супротивники, які потрапили в неї, знерухомлюються і ненадовго виявляють себе, а через деякий час оглушаються.';
					cardImg[2].src = './personalities/Cypher/ab-3.png'

					description[3].innerHTML = 'НЕЙРОКРАЖА';
					cardText[3].innerHTML = 'При наведенні прицілу на мертвого супротивника МИТТЄВО розкриває місце розташування всіх живих ворогів.';
					cardImg[3].src = './personalities/Cypher/ab-4.png'
					break;

				// REYNA
				case 'REYNA':
					description[0].innerHTML = 'ПОГЛИНАННЯ';
					cardText[0].innerHTML = 'Reyna МИТТЄВО поглинає сферу душі, що знаходиться поблизу, швидко заповнюючи здоров`я. При надмірному зціленні і перевищенні показника в 100 зайве здоров`я поступово розсіюється.';
					cardImg[0].src = './personalities/Reyna/ab-1.png'


					description[1].innerHTML = 'ВИГНАННЯ';
					cardText[1].innerHTML = 'МИТТЄВО поглинає сферу душі, що знаходиться поблизу, що дає невразливість на 2 секунди. Під час дії вміння "ІМПЕРАТРИЦЯ" також дає невидимість.';
					cardImg[1].src = './personalities/Reyna/ab-2.png'

					description[2].innerHTML = 'ЗЛОБНИЙ ПОГЛЯД';
					cardText[2].innerHTML = 'Кидає око на близьку відстань. Око обмежує огляд усіх супротивників, які подивляться на нього. Око можна знищити.';
					cardImg[2].src = './personalities/Reyna/ab-3.png'

					description[3].innerHTML = 'ІМПЕРАТРИЦЯ';
					cardText[3].innerHTML = 'ВІДРАЗУ ЖЕ впадає в сказ, підвищуючи швидкість стрільби і поводження зі зброєю. При кожному вбивстві час дії вміння подовжується.';
					cardImg[3].src = './personalities/Reyna/ab-4.png'
					break;

				case 'CHAMBER':
					description[0].innerHTML = 'МИСЛИВЕЦЬ ЗА ГОЛОВАМИ';
					cardText[0].innerHTML = 'Натисніть кнопку вміння, щоб вибрати важкий пістолет. Натисніть кнопку АЛЬТ. ВОГОНЬ, щоб прицілитися з цього пістолета.';
					cardImg[0].src = './personalities/Chamber/ab-1.png'


					description[1].innerHTML = 'РАНДЕВУ';
					cardText[1].innerHTML = 'Розміщує телепорт-якір. Перебуваючи на землі в зоні дії якоря, натисніть кнопку вміння повторно, щоб швидко телепортуватися до нього. Якір можна підібрати і розмістити заново.';
					cardImg[1].src = './personalities/Chamber/ab-2.png'

					description[2].innerHTML = 'КОРОННИЙ ПРИЙОМ';
					cardText[2].innerHTML = 'Розміщує пастку, яка виявляє супротивників. Коли ворог опиняється в зоні дії, пастка спрацьовує після короткої затримки і дестабілізує невелику область, сповільнюючи гравців у ній.';
					cardImg[2].src = './personalities/Chamber/ab-3.png'

					description[3].innerHTML = 'ДЕМОНСТРАЦІЯ СИЛИ';
					cardText[3].innerHTML = 'Натисніть кнопку вміння, щоб вибрати особливо потужну снайперську гвинтівку, з якої можна вбити ворога будь-яким прямим попаданням. На місці загибелі противника виникає поле, що уповільнює гравців у його межах.';
					cardImg[3].src = './personalities/Chamber/ab-4.png'
					break;

				case 'VIPER':
					description[0].innerHTML = 'ОТРУЙНА ХМАРА';
					cardText[0].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб викинути розпилювач, який залишається на місці до кінця раунду. Застосуйте вміння повторно, щоб випустити з розпилювача хмару отруйного диму, витрачаючи паливо.';
					cardImg[0].src = './personalities/Viper/ab-1.png'


					description[1].innerHTML = 'ТОКСИЧНА ЗАВІСА';
					cardText[1].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб вистрілити довгою чергою розпилювачів. При повторному використанні розпилювачі утворюють стіну отруйного диму, витрачаючи паливо.';
					cardImg[1].src = './personalities/Viper/ab-2.png'

					description[2].innerHTML = 'ЗМІЇНИЙ УКУС';
					cardText[2].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб запустити капсулу, яка розбивається при падінні, залишаючи після себе калюжу кислоти.';
					cardImg[2].src = './personalities/Viper/ab-3.png'

					description[3].innerHTML = 'ГНІЗДО ГАДЮКИ';
					cardText[3].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб розпорошити навколо Viper хмару хімікатів, скорочуючи дальність зору і максимальний запас здоров`я гравців, які перебувають у ньому.';
					cardImg[3].src = './personalities/Viper/ab-4.png'
					break;

				case 'BREACH':
					description[0].innerHTML = 'СЛІПУЧИЙ ЗАРЯД';
					cardText[0].innerHTML = 'Заряд засліпить усіх гравців, які дивляться в його бік.';
					cardImg[0].src = './personalities/Breach/ab-1.png'


					description[1].innerHTML = 'ТРІЩИНА';
					cardText[1].innerHTML = 'Розлом, що оглушує всіх гравців у зоні ураження.';
					cardImg[1].src = './personalities/Breach/ab-2.png'

					description[2].innerHTML = 'ПРОБИВНИЙ УДАР';
					cardText[2].innerHTML = 'Вибух завдає серйозної шкоди всім, хто потрапляє в зону ураження.';
					cardImg[2].src = './personalities/Breach/ab-3.png'

					description[3].innerHTML = 'Взрыв наносит серьезный вред всем, кто попадает в зону поражения.';
					cardText[3].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб запустити ланцюжок вибухів у великій області перед собою. Ці вибухи оглушують і підкидають у повітря все на своєму шляху.';
					cardImg[3].src = './personalities/Breach/ab-4.png'
					break;

				case 'SKYE':
					description[0].innerHTML = 'СЛЕДОПИТ';
					cardText[0].innerHTML = 'Викликає хижака і керує ним. Натисніть ВОГОНЬ, щоб тварина зробила ривок уперед, викликала оглушливий вибух і завдала шкоди ураженим ворогам.';
					cardImg[0].src = './personalities/Skye/ab-1.png'


					description[1].innerHTML = 'ДОРОГОВКАЗНЕ СВІТЛО';
					cardText[1].innerHTML = 'Послилає яструба вперед. УТРИМУЙТЕ кнопку вогню, щоб яструб летів у напрямку вашого прицілу. Під час польоту птаха використовуйте вміння знову, щоб яструб перетворився на сліпучий спалах.';
					cardImg[1].src = './personalities/Skye/ab-2.png'

					description[2].innerHTML = 'НОВА ПОРОСЛЬ';
					cardText[2].innerHTML = 'УДЕРЖУЙТЕ кнопку вогню, щоб лікувати союзників у зоні видимості та дії.';
					cardImg[2].src = './personalities/Skye/ab-3.png'

					description[3].innerHTML = 'ШУКАЧКИ';
					cardText[3].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб послати трьох шукачів, які вистежують найближчих супротивників. Шукач обмежує огляд у знайденої цілі.';
					cardImg[3].src = './personalities/Skye/ab-4.png'
					break;

				case 'SOVA':
					description[0].innerHTML = 'ШОКОВА СТРІЛА';
					cardText[0].innerHTML = 'Випускає стрілу, що летить по прямій. При зіткненні вона спрацьовує, завдаючи шкоди гравцям поблизу.';
					cardImg[0].src = './personalities/Sova/ab-1.png'


					description[1].innerHTML = 'РОЗВІДСТРІЛА';
					cardText[1].innerHTML = 'Випускає стрілу, що летить по прямій. При зіткненні вона активується, виявляючи супротивників.';
					cardImg[1].src = './personalities/Sova/ab-2.png'

					description[2].innerHTML = 'ДРОН-СОВА';
					cardText[2].innerHTML = 'Випускає дрон і отримати контроль над його пересуванням. Керуючи дроном, натисніть кнопку ВОГОНЬ, щоб вистрілити позначальним дротиком. При попаданні в гравця дротик розкриває його позицію.';
					cardImg[2].src = './personalities/Sova/ab-3.png'

					description[3].innerHTML = 'ГНІВ МИСЛИВЦЯ';
					cardText[3].innerHTML = 'Вибирає три далекобійні стріли, що пробивають стіни особливим потужним імпульсом, завдаючи шкоди і розкриваючи позицію всіх поранених ворогів.';
					cardImg[3].src = './personalities/Sova/ab-4.png'
					break;

				case 'NEON':
					description[0].innerHTML = 'СТРИБУЧИЙ СНАРЯД';
					cardText[0].innerHTML = 'МИТТЄВО кидає енергетичний снаряд, який відскакує від поверхні один раз. Коли снаряд торкається поверхні, земля під ним електризується і відбувається оглушливий вибух.';
					cardImg[0].src = './personalities/Neon/ab-1.png'

					description[1].innerHTML = 'ПІДВИЩЕНА ШВИДКІСТЬ';
					cardText[1].innerHTML = 'МИТТЄВО накопичує заряд для підвищення швидкості. Перебуваючи в зарядженому стані, натисніть кнопку АЛЬТ. ВОГОНЬ, щоб прослизнути.';
					cardImg[1].src = './personalities/Neon/ab-2.png'

					description[2].innerHTML = 'ЗАХИСНИЙ ТУНЕЛЬ';
					cardText[2].innerHTML = 'Лінії простягаються на невелику відстань або до найближчої поверхні, після чого утворюють два енергетичні бар`єри, які блокують огляд і завдають шкоди ворогам, що проходять крізь них.';
					cardImg[2].src = './personalities/Neon/ab-3.png'

					description[3].innerHTML = 'НА ПОВНУ ПОТУЖНІСТЬ';
					cardText[3].innerHTML = 'Перетворює енергію на смертоносний електричний промінь високої точності.';
					cardImg[3].src = './personalities/Neon/ab-4.png'
					break;

				case 'OMEN':
					description[0].innerHTML = 'ПАРАНОЙЯ';
					cardText[0].innerHTML = 'МИТТЄВО випускає вперед тіньовий заряд, що ненадовго обмежує огляд гравців, яких він торкнеться.';
					cardImg[0].src = './personalities/Omen/ab-1.png'


					description[1].innerHTML = 'ТЕМНИЙ ПОКРОВ';
					cardText[1].innerHTML = 'Кидає тіньову сферу, яка розширюється в обраній точці, обмежуючи огляд.';
					cardImg[1].src = './personalities/Omen/ab-2.png'

					description[2].innerHTML = 'ПРИКРИТИЙ КРОК';
					cardText[2].innerHTML = 'Після невеликої затримки телепортувати агента до обраного місця. Противники почують звук телепортації тільки від точки відправлення.';
					cardImg[2].src = './personalities/Omen/ab-3.png'

					description[3].innerHTML = 'З ТІНІ';
					cardText[3].innerHTML = 'Телепортація до обраного місця. Під час телепортації Omen постає в образі тіні, яка може бути знищена ворогом для скасування телепортації.';
					cardImg[3].src = './personalities/Omen/ab-4.png'
					break;

				case 'RAZE':
					description[0].innerHTML = 'ВИБУХОВИЙ РАНЕЦЬ';
					cardText[0].innerHTML = 'МИТТЄВО кидає вибуховий ранець, що прикріплюється до поверхонь. Використовуйте вміння повторно, щоб підірвати ранець, завдаючи шкоди і відштовхуючи агентів, які знаходяться поруч.';
					cardImg[0].src = './personalities/Raze/ab-1.png'


					description[1].innerHTML = 'КАСЕТНА ГРАНАТА';
					cardText[1].innerHTML = 'Кидає гранату, яка вибухає, завдає шкоди і випускає гранати поменше, що завдають шкоди будь-якому агенту в радіусі ураження.';
					cardImg[1].src = './personalities/Raze/ab-2.png'

					description[2].innerHTML = 'БОМБОТРОН';
					cardText[2].innerHTML = '"Бомботрон" рухається по прямій і відскакує від стін. При виявленні цілі "Бомботрон" мчить до неї по прямій і вибухає, завдаючи великої шкоди при зіткненні.';
					cardImg[2].src = './personalities/Raze/ab-3.png'

					description[3].innerHTML = 'ГАСИМО СВІЧКИ!';
					cardText[3].innerHTML = 'Випускає ракету, що завдає величезної шкоди великій ділянці під час контакту.';
					cardImg[3].src = './personalities/Raze/ab-4.png'
					break;

				case 'YORU':
					description[0].innerHTML = 'ПРИГОЛОМШЕННЯ';
					cardText[0].innerHTML = 'Вириває нестабільний фрагмент реальності. Натисніть кнопку ВОГОНЬ, щоб кинути фрагмент. При зіткненні фрагмента з твердою поверхнею виникає сліпучий спалах.';
					cardImg[0].src = './personalities/Yoru/ab-1.png'


					description[1].innerHTML = 'НЕЗВАНИЙ ГІСТЬ';
					cardText[1].innerHTML = 'Надсилає портал уперед. Телепортуйтеся по нитці за допомогою кнопки вміння. Щоб імітувати телепорт, натисніть кнопку ВИКОРИСТОВУВАТИ.';
					cardImg[1].src = './personalities/Yoru/ab-2.png'

					description[2].innerHTML = 'ПРИМАНКА';
					cardText[2].innerHTML = 'Вибирає відлуння, яке під час активації створює дзеркальне відображення Yoru.';
					cardImg[2].src = './personalities/Yoru/ab-3.png'

					description[3].innerHTML = 'ПРОСТОРОВИЙ ДРИФТ';
					cardText[3].innerHTML = 'Вибирає маску, яка дозволяє дивитися крізь виміри. Натисніть кнопку ВОГОНЬ, щоб переміститися у вимір, у якому Yoru невразливий і невидимий для ворогів';
					cardImg[3].src = './personalities/Yoru/ab-4.png'
					break;

				case 'BRIMSTONE':
					description[0].innerHTML = 'ЗАПАЛЬНА ГРАНАТА';
					cardText[0].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб запустити гранату, яка падає і вибухає після зупинки, утворюючи палаючу ділянку, в якій всі гравці отримують шкоду.';
					cardImg[0].src = './personalities/Brimstone/ab-1.png'


					description[1].innerHTML = 'НЕБЕСНИЙ ДИМ';
					cardText[1].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб вказати місця на карті для скидання димової завіси.';
					cardImg[1].src = './personalities/Brimstone/ab-2.png'

					description[2].innerHTML = 'МАЯЧОК-СТИМУЛЯТОР';
					cardText[2].innerHTML = 'Вибирає маячок-стимулятор. Натисніть кнопку ВОГОНЬ, щоб кинути його перед Brimstone. Після приземлення маячок підвищує скорострільність найближчих гравців.';
					cardImg[2].src = './personalities/Brimstone/ab-3.png'

					description[3].innerHTML = 'ОРБІТАЛЬНИЙ УДАР';
					cardText[3].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб запустити в обране місце орбітальний удар, що завдає високої періодичної шкоди гравцям, які перебувають в обраній зоні.';
					cardImg[3].src = './personalities/Brimstone/ab-4.png'
					break;

				case 'KJ':
					description[0].innerHTML = 'ТРЕВОГОБОТ';
					cardText[0].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб випустити бота, який атакує супротивників, що опинилися в його радіусі дії. Досягнувши мети, бот вибухає, завдаючи шкоди і роблячи супротивників уразливими.';
					cardImg[0].src = './personalities/Killjoy/ab-1.png'


					description[1].innerHTML = 'ТУРЕЛЬ';
					cardText[1].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб встановити турель, яка автоматично відстежує супротивників у 180-градусному секторі.';
					cardImg[1].src = './personalities/Killjoy/ab-2.png'

					description[2].innerHTML = 'УЛЕЙ';
					cardText[2].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб кинути гранату. Після приземлення граната маскується. АКТИВУЙТЕ "Вулик", щоб випустити рій наноботів, що завдають шкоди.';
					cardImg[2].src = './personalities/Killjoy/ab-3.png'

					description[3].innerHTML = 'БЛОКУВАННЯ';
					cardText[3].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб встановити генератор. Затримує всіх супротивників, які перебувають у радіусі дії. Противники можуть вивести генератор з ладу.';
					cardImg[3].src = './personalities/Killjoy/ab-4.png'
					break;

				case 'KAYO':
					description[0].innerHTML = 'ОСЛІП/ЛЯЮЧА ГРАНАТА';
					cardText[0].innerHTML = 'Вибирає сліпучу гранату. Натисніть кнопку ВОГОНЬ, щоб кинути її. Граната швидко вибухає, засліплюючи всіх у зоні видимості.';
					cardImg[0].src = './personalities/Kayo/ab-1.png'


					description[1].innerHTML = 'ЕПІ/ЦЕНТР';
					cardText[1].innerHTML = 'Клинок вибухає в тому місці, куди приземляється, і пригнічує всіх у радіусі вибуху.';
					cardImg[1].src = './personalities/Kayo/ab-2.png'

					description[2].innerHTML = 'ФРАГ/МЕНТ';
					cardText[2].innerHTML = 'Вибирає вибухонебезпечний фрагмент. Натисніть кнопку ВОГОНЬ, щоб кинути його. Після приземлення фрагмента відбувається серія вибухів, кожен з яких завдає практично смертельної шкоди ворогам, які перебувають у самому центрі.';
					cardImg[2].src = './personalities/Kayo/ab-3.png'

					description[3].innerHTML = 'NULL/CMD';
					cardText[3].innerHTML = 'МИТТЄВО заряджається енергією поляризованого радіаніту, яка посилює KAY/O і спричиняє потужне випромінювання звідти, де він знаходиться.';
					cardImg[3].src = './personalities/Kayo/ab-4.png'
					break;

				case 'FADE':
					description[0].innerHTML = 'ЗАХВАТ';
					cardText[0].innerHTML = 'Сфера падає на землю, після чого вибухає й утворює область-пастку, з якої важко вибратися.';
					cardImg[0].src = './personalities/Fade/ab-1.png'


					description[1].innerHTML = 'ПРИВИД';
					cardText[1].innerHTML = 'Сфера падає на землю, після чого перетворюється на кошмарну сутність, яка розкриває місце розташування всіх супротивників, що потрапили в її поле зору.';
					cardImg[1].src = './personalities/Fade/ab-2.png'

					description[2].innerHTML = 'ХИЖАК';
					cardText[2].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб послати хижака вперед по прямій траєкторії. Хижак фокусується на всіх супротивниках і слідах у полі свого зору і починає полювання, обмежуючи огляд спійманих цілей.';
					cardImg[2].src = './personalities/Fade/ab-3.png'

					description[3].innerHTML = 'ТЬМА';
					cardText[3].innerHTML = 'Натисніть кнопку ВОГОНЬ, щоб створити хвилю енергії Кошмару, що проходить крізь стіни. Ця енергія оглушує противника і завдає йому періодичної шкоди, а також розкриває шлях до нього.';
					cardImg[3].src = './personalities/Fade/ab-4.png'
					break;

				case 'HARBOR':
					description[0].innerHTML = 'ЗАЛИВ';
					cardText[0].innerHTML = 'Обирає захисну водяну сферу. Натисніть ВОГОНЬ, щоб кинути її. Сфера створює водяний щит, що руйнується і блокує кулі.';
					cardImg[0].src = './personalities/Harbor/ab-1.png'


					description[1].innerHTML = 'ГРЕБЕНЬ ХВИЛІ';
					cardText[1].innerHTML = 'ОБИРАЄ водяну стіну. НАТИСНІТЬ "ВОГОНЬ", щоб послати воду вперед по землі. Гравці, які зіткнулися з хвилею, забарилися.';
					cardImg[1].src = './personalities/Harbor/ab-2.png'

					description[2].innerHTML = 'КАСКАД';
					cardText[2].innerHTML = 'ЩБИРАЄ водяну хвилю, що проходить крізь стіни. НАТИСНІТЬ "ВОГОНЬ", щоб відправити хвилю вперед. Гравці, які зіткнулися з хвилею, забарилися.';
					cardImg[2].src = './personalities/Harbor/ab-3.png'

					description[3].innerHTML = 'РОЗРАХУНОК КУРСУ';
					cardText[3].innerHTML = 'НАТИСНІТЬ "ВОГОНЬ", щоб створити на землі гейзерне озеро. Ворожі гравці в зоні дії опиняються під прицілом гейзерних ударів. Такий удар ЗАГЛУШУЄ ціль.';
					cardImg[3].src = './personalities/Harbor/ab-4.png'
					break;

				case 'ASTRA':
					description[0].innerHTML = 'ВИБУХ НАДНОВОЇ';
					cardText[0].innerHTML = 'АКТИВУЙТЕ зірку, щоб викликати "Вибух свехнової". Він швидко заряджається і оглушує всіх гравців у зоні дії.';
					cardImg[0].src = './personalities/Astra/ab-1.png'


					description[1].innerHTML = 'ТУМАННІСТЬ';
					cardText[1].innerHTML = 'АКТИВУЙТЕ зірку, щоб перетворити її на "Туманність" (дим).';
					cardImg[1].src = './personalities/Astra/ab-2.png'

					description[2].innerHTML = 'ГРАВІТАЦІЙНИЙ КОЛОДЯЗЬ';
					cardText[2].innerHTML = 'АКТИВУЙТЕ зірку, щоб створити "Гравітаційний колодязь". Гравці в області дії притягуються до центру. Потім "Гравітаційний колодязь" вибухає, послаблюючи гравців усередині.';
					cardImg[2].src = './personalities/Astra/ab-3.png'

					description[3].innerHTML = 'АСТРАЛЬНА ФОРМА / ПРОСТОРОВИЙ РОЗЛОМ';
					cardText[3].innerHTML = 'Натисніть кнопку "АКТИВУВАТИ" (X), щоб увійти в Астральну форму і розмістити зірки. Виникне "Просторовий розлом", який проходить через обрані точки. "Просторовий розлом" блокує кулі та сильно знижує гучність звуків.';
					cardImg[3].src = './personalities/Astra/ab-4.png'
					break;

				case 'PHOENIX':
					description[0].innerHTML = 'КРУЧЕНА ПОДАЧА';
					cardText[0].innerHTML = 'Вибирає сліпучу сферу, що летить по дузі і вибухає незабаром після кидка. Під час вибуху сфера засліплює всіх гравців, які дивилися на неї в момент вибуху.';
					cardImg[0].src = './personalities/Phoenix/ab-1.png'


					description[1].innerHTML = 'ГАРЯЧІ РУКИ';
					cardText[1].innerHTML = 'Натисканням кнопки ВОГОНЬ випускається вогняна куля, яка вибухає після затримки або під час падіння на землю, створюючи охоплену вогнем область, що завдає шкоди противникам.';
					cardImg[1].src = './personalities/Phoenix/ab-2.png'

					description[2].innerHTML = 'ПЕКЛО';
					cardText[2].innerHTML = 'Вибирає вогняну стіну. Натисканням кнопки ВОГОНЬ вперед випускається полум`я, що утворює стіну вогню. Вона затуляє огляд і завдає шкоди гравцям, які проходять через неї.';
					cardImg[2].src = './personalities/Phoenix/ab-3.png'

					description[3].innerHTML = 'ПОВЕРНЕННЯ';
					cardText[3].innerHTML = 'МИТТЄВО позначає поточну позицію Phoenix. Якщо час дії вміння закінчується або якщо Phoenix гине, поки воно діє, то він воскресає в точці, де почав застосовувати вміння, з повним запасом здоров`я.';
					cardImg[3].src = './personalities/Phoenix/ab-4.png'
					break;
				default:
					showMenu(allCard, 400);
			}
			break;

		case 'ru':
			nameAbil[0].textContent = 'БАЗОВАЯ';
			nameAbil[1].textContent = 'СИГНАТУРА';
			nameAbil[2].textContent = 'ПАССИВНАЯ';
			nameAbil[3].textContent = 'УЛЬТИМЕЙТ';

			switch (date) {
				// SAGE
				case 'SAGE':
					description[0].innerHTML = 'СФЕРА ЗАМЕДЛЕНИЯ';
					cardText[0].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы бросить замедляющую сферу вперед. После падения сфера создает поле, которое замедляет игроков.';
					cardImg[0].src = './personalities/Sage/ab-1.png'


					description[1].innerHTML = 'СФЕРА ЛЕЧЕНИЯ';
					cardText[1].innerHTML = 'При наведении на раненого союзника и нажатии кнопки ОГОНЬ активирует постепенное восстановление здоровья';
					cardImg[1].src = './personalities/Sage/ab-2.png'

					description[2].innerHTML = 'СФЕРА БАРЬЕРА';
					cardText[2].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы создать непроходимую стену. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы повернуть стену перед установкой';
					cardImg[2].src = './personalities/Sage/ab-3.png'

					description[3].innerHTML = 'ВОСКРЕШЕНИЕ';
					cardText[3].innerHTML = 'Наведите прицел на погибшего союзника и нажмите кнопку ОГОНЬ, чтобы начать воскрешение. После небольшой задержки цель вернется к жизни с полным запасом здоровья.';
					cardImg[3].src = './personalities/Sage/ab-4.png'
					break;

				// GEKKO
				case 'GEKKO':
					description[0].innerHTML = 'БЕГУН';
					cardText[0].innerHTML = 'Бегун высвобождает энергию в сторону первого увиденного врага, совершая оглушающий взрыв. Нацелившись на точку установки спайк или на установленный спайк, чтобы Бегун установил или обезвредил его.';
					cardImg[0].src = './personalities/Gekko/ab-1.png'


					description[1].innerHTML = 'КЛЯКСА';
					cardText[1].innerHTML = 'Зарядившись, Клякса запускает взрывающиеся сгустки плазмы в сторону противников в зоне видимости.';
					cardImg[1].src = './personalities/Gekko/ab-2.png'

					description[2].innerHTML = 'ТЫДЫЩ';
					cardText[2].innerHTML = 'Тыдыщ разделяется, покрывая большую площадь, и после небольшой задержки взрывается.';
					cardImg[2].src = './personalities/Gekko/ab-3.png'

					description[3].innerHTML = 'БАБАХ';
					cardText[3].innerHTML = 'Устанавливается мысленная связь с Бабах и управлием ее передвижением по вражеской территории. Нажмите кнопку активации, чтобы Бабах сделала рывок вперед и устроила взрыв, замедлив врагов на небольшом расстоянии от себя.';
					cardImg[3].src = './personalities/Gekko/ab-4.png'
					break;

				// JETT
				case 'JETT':
					description[0].innerHTML = 'ПОДЪЕМ';
					cardText[0].innerHTML = 'Jett МГНОВЕННО взлетает в воздух.';
					cardImg[0].src = './personalities/Jett/ab-1.png'


					description[1].innerHTML = 'ПОПУТНЫЙ ВЕТЕР';
					cardText[1].innerHTML = 'Используйте умение повторно, чтобы Jett совершила рывок в направлении своего движения.';
					cardImg[1].src = './personalities/Jett/ab-2.png'

					description[2].innerHTML = 'ВИХРЬ';
					cardText[2].innerHTML = 'МГНОВЕННО бросает снаряд, превращающийся в ненадолго закрывающее обзор облако при столкновении с поверхностью.';
					cardImg[2].src = './personalities/Jett/ab-3.png'

					description[3].innerHTML = 'БУРЯ КЛИНКОВ';
					cardText[3].innerHTML = 'Вооружается набором высокоточных кинжалов, которые перезаряжаются после ликвидации противника.';
					cardImg[3].src = './personalities/Jett/ab-4.png'
					break;

				// CYPHER
				case 'CYPHER':
					description[0].innerHTML = 'КИБЕРКЛЕТКА';
					cardText[0].innerHTML = 'Ограничивает обзор проходящих через нее противников и замедляет их.';
					cardImg[0].src = './personalities/Cypher/ab-1.png'


					description[1].innerHTML = 'КАМЕРА';
					cardText[1].innerHTML = 'Помещает камеру в выбранном месте. Используйте умение снова, чтобы управлять камерой. Во время управления камерой нажмите кнопку ОГОНЬ, чтобы выстрелить отслеживающим дротиком. При попадании в игрока дротик отмечает его местонахождение.';
					cardImg[1].src = './personalities/Cypher/ab-2.png'

					description[2].innerHTML = 'РАСТЯЖКА';
					cardText[2].innerHTML = 'Установить в выбранном месте разрушаемую незаметную растяжку, соединяемую с противоположной стеной. Попавшие в нее противники обездвиживаются и ненадолго обнаруживают себя, а через некоторое время оглушаются.';
					cardImg[2].src = './personalities/Cypher/ab-3.png'

					description[3].innerHTML = 'НЕЙРОКРАЖА';
					cardText[3].innerHTML = 'При наведении прицела на мертвого противника МГНОВЕННО раскрывает местоположение всех живых врагов.';
					cardImg[3].src = './personalities/Cypher/ab-4.png'
					break;

				// REYNA
				case 'REYNA':
					description[0].innerHTML = 'ПОГЛОЩЕНИЕ';
					cardText[0].innerHTML = 'Reyna МГНОВЕННО поглощает находящуюся поблизости сферу души, быстро восполняя здоровье. При чрезмерном исцелении и превышении показателя в 100 лишнее здоровье постепенно рассеивается.';
					cardImg[0].src = './personalities/Reyna/ab-1.png'


					description[1].innerHTML = 'ИЗГНАНИЕ';
					cardText[1].innerHTML = 'МГНОВЕННО поглощает находящуюся поблизости сферу души, что дает неуязвимость на 2 секунды. Во время действия умения "ИМПЕРАТРИЦА" также дает невидимость.';
					cardImg[1].src = './personalities/Reyna/ab-2.png'

					description[2].innerHTML = 'ЗЛОБНЫЙ ВЗГЛЯД';
					cardText[2].innerHTML = 'Бросает глаз на близкое расстояние. Глаз ограничивает обзор всех противников, которые посмотрят на него. Глаз можно уничтожить.';
					cardImg[2].src = './personalities/Reyna/ab-3.png'

					description[3].innerHTML = 'ИМПЕРАТРИЦА';
					cardText[3].innerHTML = 'СРАЗУ ЖЕ впадает в бешенство, повышая скорость стрельбы и обращения с оружием. При каждом убийстве время действия умения продлевается.';
					cardImg[3].src = './personalities/Reyna/ab-4.png'
					break;

				case 'CHAMBER':
					description[0].innerHTML = 'ОХОТНИК ЗА ГОЛОВАМИ';
					cardText[0].innerHTML = 'Нажмите кнопку умения, чтобы выбрать тяжелый пистолет. Нажмите кнопку АЛЬТ. ОГОНЬ, чтобы прицелиться из этого пистолета.';
					cardImg[0].src = './personalities/Chamber/ab-1.png'


					description[1].innerHTML = 'РАНДЕВУ';
					cardText[1].innerHTML = 'Размещает телепорт-якорь. Находясь на земле в зоне действия якоря, нажмите кнопку умения повторно, чтобы быстро телепортироваться к нему. Якорь можно подобрать и разместить заново.';
					cardImg[1].src = './personalities/Chamber/ab-2.png'

					description[2].innerHTML = 'КОРОННЫЙ ПРИЕМ';
					cardText[2].innerHTML = 'Размещает ловушку, которая обнаруживает противников. Когда враг оказывается в зоне действия, ловушка срабатывает после короткой задержки и дестабилизирует небольшую область, замедляя игроков в ней.';
					cardImg[2].src = './personalities/Chamber/ab-3.png'

					description[3].innerHTML = 'ДЕМОНСТРАЦИЯ СИЛЫ';
					cardText[3].innerHTML = 'Нажмите кнопку умения, чтобы выбрать особо мощную снайперскую винтовку, из которой можно убить врага любым прямым попаданием. На месте гибели противника возникает поле, замедляющее игроков в его пределах.';
					cardImg[3].src = './personalities/Chamber/ab-4.png'
					break;

				case 'VIPER':
					description[0].innerHTML = 'ЯДОВИТОЕ ОБЛАКО';
					cardText[0].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы выбросить распылитель, который остается на месте до конца раунда. Примените умение повторно, чтобы выпустить из распылителя облако ядовитого дыма, расходуя топливо.';
					cardImg[0].src = './personalities/Viper/ab-1.png'


					description[1].innerHTML = 'ТОКСИЧНАЯ ЗАВЕСА';
					cardText[1].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы выстрелить длинной очередью распылителей. При повторном использовании распылители образуют стену ядовитого дыма, расходуя топливо. ';
					cardImg[1].src = './personalities/Viper/ab-2.png'

					description[2].innerHTML = 'ЗМЕИНЫЙ УКУС';
					cardText[2].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы запустить капсулу, которая разбивается при падении, оставляя после себя лужу кислоты.';
					cardImg[2].src = './personalities/Viper/ab-3.png'

					description[3].innerHTML = 'ГНЕЗДО ГАДЮКИ';
					cardText[3].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы распылить вокруг Viper облако химикатов, сокращая дальность зрения и максимальный запас здоровья находящихся в нем игроков.';
					cardImg[3].src = './personalities/Viper/ab-4.png'
					break;

				case 'BREACH':
					description[0].innerHTML = 'ОСЛЕПЛЯЮЩИЙ ЗАРЯД';
					cardText[0].innerHTML = 'Заряд ослепит всех смотрящих в его сторону игроков.';
					cardImg[0].src = './personalities/Breach/ab-1.png'


					description[1].innerHTML = 'ТРЕЩИНА';
					cardText[1].innerHTML = 'Разлом, оглушающий всех игроков в зоне поражения.';
					cardImg[1].src = './personalities/Breach/ab-2.png'

					description[2].innerHTML = 'ПРОБИВНОЙ УДАР';
					cardText[2].innerHTML = 'Взрыв наносит серьезный урон всем, кто попадает в зону поражения.';
					cardImg[2].src = './personalities/Breach/ab-3.png'

					description[3].innerHTML = 'РАСКАТ ГРОМА';
					cardText[3].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы запустить цепочку взрывов в обширной области перед собой. Эти взрывы оглушают и подбрасывают в воздух все на своем пути.';
					cardImg[3].src = './personalities/Breach/ab-4.png'
					break;

				case 'SKYE':
					description[0].innerHTML = 'СЛЕДОПЫТ';
					cardText[0].innerHTML = 'Вызывает хищника и управляет им. Нажмите ОГОНЬ, чтобы животное сделало рывок вперед, вызвало оглушающий взрыв и нанесло урон пораженным врагам.';
					cardImg[0].src = './personalities/Skye/ab-1.png'


					description[1].innerHTML = 'ПУТЕВОДНЫЙ СВЕТ';
					cardText[1].innerHTML = 'Послылает ястреба вперед. УДЕРЖИВАЙТЕ кнопку огня, чтобы ястреб летел в направлении вашего прицела. Во время полета птицы используйте умение снова, чтобы ястреб превратился в ослепляющую вспышку.';
					cardImg[1].src = './personalities/Skye/ab-2.png'

					description[2].innerHTML = 'НОВАЯ ПОРОСЛЬ';
					cardText[2].innerHTML = 'УДЕРЖИВАЙТЕ кнопку огня, чтобы лечить союзников в зоне видимости и действия.';
					cardImg[2].src = './personalities/Skye/ab-3.png'

					description[3].innerHTML = 'ИЩЕЙКИ';
					cardText[3].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы послать троих ищеек, которые выслеживают ближайших противников. Ищейка ограничивает обзор у найденной цели.';
					cardImg[3].src = './personalities/Skye/ab-4.png'
					break;

				case 'SOVA':
					description[0].innerHTML = 'ШОКОВАЯ СТРЕЛА';
					cardText[0].innerHTML = 'Выпускает стрелу, летящую по прямой. При столкновении она срабатывает, нанося урон игрокам поблизости.';
					cardImg[0].src = './personalities/Sova/ab-1.png'


					description[1].innerHTML = 'РАЗВЕДСТРЕЛА';
					cardText[1].innerHTML = 'Выпускает стрелу, летящую по прямой. При столкновении она активируется, обнаруживая противников.';
					cardImg[1].src = './personalities/Sova/ab-2.png'

					description[2].innerHTML = 'ДРОН-СОВА';
					cardText[2].innerHTML = 'Выпускает дрон и получить контроль над его передвижением. Управляя дроном, нажмите кнопку ОГОНЬ, чтобы выстрелить помечающим дротиком. При попадании в игрока дротик раскрывает его позицию.';
					cardImg[2].src = './personalities/Sova/ab-3.png'

					description[3].innerHTML = 'ГНЕВ ОХОТНИКА';
					cardText[3].innerHTML = 'Выбирает три дальнобойные стрелы, пробивающие стены особым мощным импульсом, нанося урон и раскрывая позицию всех раненых врагов.';
					cardImg[3].src = './personalities/Sova/ab-4.png'
					break;

				case 'NEON':
					description[0].innerHTML = 'ПРЫГАЮЩИЙ СНАРЯД';
					cardText[0].innerHTML = 'МГНОВЕННО бросает энергетический снаряд, который отскакивает от поверхности один раз. Когда снаряд касается поверхности, земля под ним электризуется и происходит оглушающий взрыв.';
					cardImg[0].src = './personalities/Neon/ab-1.png'


					description[1].innerHTML = 'ПОВЫШЕННАЯ СКОРОСТЬ';
					cardText[1].innerHTML = 'МГНОВЕННО накапливает заряд для повышения скорости. Находясь в заряженном состоянии, нажмите кнопку АЛЬТ. ОГОНЬ, чтобы проскользить.';
					cardImg[1].src = './personalities/Neon/ab-2.png'

					description[2].innerHTML = 'ЗАЩИТНЫЙ ТУННЕЛЬ';
					cardText[2].innerHTML = 'Линии простираются на небольшое расстояние или до ближайшей поверхности, после чего образуют два энергетических барьера, которые блокируют обзор и наносят урон проходящим сквозь них врагам.';
					cardImg[2].src = './personalities/Neon/ab-3.png'

					description[3].innerHTML = 'НА ПОЛНУЮ МОЩЬ';
					cardText[3].innerHTML = 'Преображает энергию в смертоносный электрический луч высокой точности. ';
					cardImg[3].src = './personalities/Neon/ab-4.png'
					break;

				case 'OMEN':
					description[0].innerHTML = 'ПАРАНОЙЯ';
					cardText[0].innerHTML = 'МГНОВЕННО выпускает вперед теневой заряд, ненадолго ограничивающий обзор игроков, которых он коснется.';
					cardImg[0].src = './personalities/Omen/ab-1.png'


					description[1].innerHTML = 'ТЕМНЫЙ ПОКРОВ';
					cardText[1].innerHTML = 'Бросает теневую сферу, которая расширяется в выбранной точке, ограничивая обзор.';
					cardImg[1].src = './personalities/Omen/ab-2.png'

					description[2].innerHTML = 'СКРЫТЫЙ ШАГ';
					cardText[2].innerHTML = 'После небольшой задержки телепортировать агента к выбранному месту. Противники услышат звук телепортации только от точки отправления.';
					cardImg[2].src = './personalities/Omen/ab-3.png'

					description[3].innerHTML = 'ИЗ ТЕНИ';
					cardText[3].innerHTML = 'Телепортация к выбранному месту. Во время телепортации Omen предстает в образе тени, которая может быть уничтожена врагом для отмены телепортации.';
					cardImg[3].src = './personalities/Omen/ab-4.png'
					break;

				case 'RAZE':
					description[0].innerHTML = 'ВЗРЫВНОЙ РАНЕЦ';
					cardText[0].innerHTML = 'МГНОВЕННО бросает взрывной ранец, прикрепляющийся к поверхностям. Используйте умение повторно, чтобы взорвать ранец, нанося урон и отталкивая находящихся рядом агентов.';
					cardImg[0].src = './personalities/Raze/ab-1.png'


					description[1].innerHTML = 'КАССЕТНАЯ ГРАНАТА';
					cardText[1].innerHTML = 'Бросает гранату, которая взрывается, наносит урон и выпускает гранаты поменьше, наносящие урон любому агенту в радиусе поражения.';
					cardImg[1].src = './personalities/Raze/ab-2.png'

					description[2].innerHTML = 'БОМБОТРОН';
					cardText[2].innerHTML = '"Бомботрон" двигается по прямой и отскакивает от стен. При обнаружении цели "Бомботрон" мчится к ней по прямой и взрывается, нанося большой урон при столкновении.';
					cardImg[2].src = './personalities/Raze/ab-3.png'

					description[3].innerHTML = 'ГАСИМ СВЕЧИ!';
					cardText[3].innerHTML = 'Выпускает ракету, наносящую огромный урон по большой области при контакте.';
					cardImg[3].src = './personalities/Raze/ab-4.png'
					break;

				case 'YORU':
					description[0].innerHTML = 'ОШЕЛОМЛЕНИЕ';
					cardText[0].innerHTML = 'Вырывает нестабильный фрагмент реальности. Нажмите кнопку ОГОНЬ, чтобы бросить фрагмент. При столкновении фрагмента с твердой поверхностью возникает ослепляющая вспышка.';
					cardImg[0].src = './personalities/Yoru/ab-1.png'


					description[1].innerHTML = 'НЕЗВАНЫЙ ГОСТЬ';
					cardText[1].innerHTML = 'Посылает портал вперед. Телепортируйтесь по нити с помощью кнопки умения. Чтобы имитировать телепорт, нажмите кнопку ИСПОЛЬЗОВАТЬ.';
					cardImg[1].src = './personalities/Yoru/ab-2.png'

					description[2].innerHTML = 'ПРИМАНКА';
					cardText[2].innerHTML = 'Выбирает эхо, которое при активации создает зеркальное отражение Yoru.';
					cardImg[2].src = './personalities/Yoru/ab-3.png'

					description[3].innerHTML = 'ПРОСТРАНСТВЕННЫЙ ДРИФТ';
					cardText[3].innerHTML = 'Выбирает маску, которая позволяет смотреть сквозь измерения. Нажмите кнопку ОГОНЬ, чтобы переместиться в измерение, в котором Yoru неуязвим и невидим для врагов';
					cardImg[3].src = './personalities/Yoru/ab-4.png'
					break;

				case 'BRIMSTONE':
					description[0].innerHTML = 'ЗАЖИГАТЕЛЬНАЯ ГРАНАТА';
					cardText[0].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы запустить гранату, которая падает и взрывается после остановки, образуя горящую область, в которой все игроки получают урон.';
					cardImg[0].src = './personalities/Brimstone/ab-1.png'


					description[1].innerHTML = 'НЕБЕСНЫЙ ДЫМ';
					cardText[1].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы указать места на карте для сброса дымовой завесы.';
					cardImg[1].src = './personalities/Brimstone/ab-2.png'

					description[2].innerHTML = 'МАЯЧОК-СТИМУЛЯТОР';
					cardText[2].innerHTML = 'Выбирает маячок-стимулятор. Нажмите кнопку ОГОНЬ, чтобы бросить его перед Brimstone. После приземления маячок повышает скорострельность ближайших игроков.';
					cardImg[2].src = './personalities/Brimstone/ab-3.png'

					description[3].innerHTML = 'ОРБИТАЛЬНЫЙ УДАР';
					cardText[3].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы запустить в выбранное место орбитальный удар, наносящий высокий периодический урон игрокам, находящимся в выбранной зоне.';
					cardImg[3].src = './personalities/Brimstone/ab-4.png'
					break;

				case 'KJ':
					description[0].innerHTML = 'ТРЕВОГОБОТ';
					cardText[0].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы выпустить бота, который атакует противников, оказавшихся в его радиусе действия. Достигнув цели, бот взрывается, нанося урон и делая противников уязвимыми.';
					cardImg[0].src = './personalities/Killjoy/ab-1.png'


					description[1].innerHTML = 'ТУРЕЛЬ';
					cardText[1].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы установить турель, которая автоматически отслеживает противников в 180-градусном секторе.';
					cardImg[1].src = './personalities/Killjoy/ab-2.png'

					description[2].innerHTML = 'УЛЕЙ';
					cardText[2].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы бросить гранату. После приземления граната маскируется. АКТИВИРУЙТЕ "Улей", чтобы выпустить рой наносящих урон наноботов.';
					cardImg[2].src = './personalities/Killjoy/ab-3.png'

					description[3].innerHTML = 'БЛОКИРОВКА';
					cardText[3].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы установить генератор. Задерживает всех противников, находящихся в радиусе действия. Противники могут вывести генератор из строя.';
					cardImg[3].src = './personalities/Killjoy/ab-4.png'
					break;

				case 'KAYO':
					description[0].innerHTML = 'СВЕТ/ОВАЯ ГРАНАТА';
					cardText[0].innerHTML = 'Выбирает ослепляющую гранату. Нажмите кнопку ОГОНЬ, чтобы бросить ее. Граната быстро взрывается, ослепляя всех в зоне видимости.';
					cardImg[0].src = './personalities/Kayo/ab-1.png'


					description[1].innerHTML = 'ЭПИ/ЦЕНТР';
					cardText[1].innerHTML = 'Клинок взрывается в том месте, куда приземляется, и подавляет всех в радиусе взрыва.';
					cardImg[1].src = './personalities/Kayo/ab-2.png'

					description[2].innerHTML = 'ФРАГ/МЕНТ';
					cardText[2].innerHTML = 'Выбирает взрывоопасный фрагмент. Нажмите кнопку ОГОНЬ, чтобы бросить его. После приземления фрагмента происходит серия взрывов, каждый из которых наносит практически смертельный урон врагам, находящимся в самом центре.';
					cardImg[2].src = './personalities/Kayo/ab-3.png'

					description[3].innerHTML = 'NULL/CMD';
					cardText[3].innerHTML = 'МГНОВЕННО заряжается энергией поляризованного радианита, которая усиливает KAY/O и вызывает мощное излучение оттуда, где он находится.';
					cardImg[3].src = './personalities/Kayo/ab-4.png'
					break;

				case 'FADE':
					description[0].innerHTML = 'ЗАХВАТ';
					cardText[0].innerHTML = 'Сфера падает на землю, после чего взрывается и образует область-ловушку, из которой трудно выбраться.';
					cardImg[0].src = './personalities/Fade/ab-1.png'


					description[1].innerHTML = 'ПРИЗРАК';
					cardText[1].innerHTML = 'Сфера падает на землю, после чего превращается в кошмарную сущность, которая раскрывает местоположение всех противников, попавших в ее поле зрения.';
					cardImg[1].src = './personalities/Fade/ab-2.png'

					description[2].innerHTML = 'ХИЩНИК';
					cardText[2].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы послать хищника вперед по прямой траектории. Хищник фокусируется на всех противниках и следах в поле своего зрения и начинает охоту, ограничивая обзор пойманных целей.';
					cardImg[2].src = './personalities/Fade/ab-3.png'

					description[3].innerHTML = 'ТЬМА';
					cardText[3].innerHTML = 'Нажмите кнопку ОГОНЬ, чтобы создать волну энергии Кошмара, проходящую сквозь стены. Эта энергия оглушает противника и наносит ему периодический урон, а также раскрывает путь к нему.';
					cardImg[3].src = './personalities/Fade/ab-4.png'
					break;

				case 'HARBOR':
					description[0].innerHTML = 'ЗАЛИВ';
					cardText[0].innerHTML = 'Выбирает защитную водяную сферу. Нажмите ОГОНЬ, чтобы бросить ее. Сфера создает разрушаемый водяной щит, блокирующий пули.';
					cardImg[0].src = './personalities/Harbor/ab-1.png'


					description[1].innerHTML = 'ГРЕБЕНЬ ВОЛНЫ';
					cardText[1].innerHTML = 'ВЫБИРАЕТ водяную стену. НАЖМИТЕ "ОГОНЬ", чтобы послать воду вперед по земле. Игроки, столкнувшиеся с волной, ЗАМЕДЛЯЮТСЯ.';
					cardImg[1].src = './personalities/Harbor/ab-2.png'

					description[2].innerHTML = 'КАСКАД';
					cardText[2].innerHTML = 'ВЫБИРАЕТ водяную волну, проходящую сквозь стены. НАЖМИТЕ "ОГОНЬ", чтобы отправить волну вперед. Игроки, столкнувшиеся с волной, ЗАМЕДЛЯЮТСЯ.';
					cardImg[2].src = './personalities/Harbor/ab-3.png'

					description[3].innerHTML = 'РАСЧЕТ КУРСА';
					cardText[3].innerHTML = 'НАЖМИТЕ "ОГОНЬ", чтобы создать на земле гейзерное озеро. Вражеские игроки в зоне действия оказываются под прицелом гейзерных ударов. Такой удар ОГЛУШАЕТ цель.';
					cardImg[3].src = './personalities/Harbor/ab-4.png'
					break;

				case 'ASTRA':
					description[0].innerHTML = 'ВЗРЫВ СВЕРХНОВОЙ';
					cardText[0].innerHTML = 'АКТИВИРУЙТЕ звезду, чтобы вызвать "Взрыв свехновой". Он быстро заряжается и оглушает всех игроков в зоне действия.';
					cardImg[0].src = './personalities/Astra/ab-1.png'


					description[1].innerHTML = 'ТУМАННОСТЬ';
					cardText[1].innerHTML = 'АКТИВИРУЙТЕ звезду, чтобы преобразовать ее в "Туманность" (дым).';
					cardImg[1].src = './personalities/Astra/ab-2.png'

					description[2].innerHTML = 'ГРАВИТАЦИОННЫЙ КОЛОДЕЦ';
					cardText[2].innerHTML = 'АКТИВИРУЙТЕ звезду, чтобы создать "Гравитационный колодец". Игроки в области действия притягиваются к центру. Затем "Гравитационный колодец" взрывается, ослабляя игроков внутри.';
					cardImg[2].src = './personalities/Astra/ab-3.png'

					description[3].innerHTML = 'АСТРАЛЬНАЯ ФОРМА / ПРОСТРАНСТВЕННЫЙ РАЗЛОМ';
					cardText[3].innerHTML = 'Нажмите кнопку "АКТИВИРОВАТЬ" (X), чтобы войти в Астральную форму и разместить звезды. Возникнет "Пространственный разлом", который проходит через выбранные точки. "Пространственный разлом" блокирует пули и сильно снижает громкость звуков.';
					cardImg[3].src = './personalities/Astra/ab-4.png'
					break;

				case 'PHOENIX':
					description[0].innerHTML = 'КРУЧЕНАЯ ПОДАЧА';
					cardText[0].innerHTML = 'Выбирает ослепляющую сферу, летящую по дуге и взрывающуюся вскоре после броска. При взрыве сфера ослепляет всех игроков, смотревших на нее в момент взрыва.';
					cardImg[0].src = './personalities/Phoenix/ab-1.png'


					description[1].innerHTML = 'ГОРЯЧИЕ РУКИ';
					cardText[1].innerHTML = 'Нажатием кнопки ОГОНЬ выпускается огненный шар, который взрывается после задержки или при падении на землю, создавая охваченную огнем область, наносящую урон противникам.';
					cardImg[1].src = './personalities/Phoenix/ab-2.png'

					description[2].innerHTML = 'ПЕКЛО';
					cardText[2].innerHTML = 'Выбирает огненную стену. Нажатием кнопки ОГОНЬ вперед выпускается пламя, образующее стену огня. Она заслоняет обзор и наносит урон проходящим через нее игрокам.';
					cardImg[2].src = './personalities/Phoenix/ab-3.png'

					description[3].innerHTML = 'ВОЗВРАТ';
					cardText[3].innerHTML = 'МГНОВЕННО помечает текущую позицию Phoenix. Если время действия умения истекает или если Phoenix погибает, пока оно действует, то он воскресает в точке, где начал применять умение, с полным запасом здоровья.';
					cardImg[3].src = './personalities/Phoenix/ab-4.png'
					break;
				default:
					showMenu(allCard, 400);
			}
			break;
	}
}

const footerDesign = document.querySelector('.footer__link'),
	footerSub = document.querySelector('.footer__subscribe'),
	footerNick = document.querySelector('.footer__subscribe a');

let footer = {
	eu: {
		footerDesign: 'The site design was taken from the public domain.',
		footerSub: 'The code for the site was written by a frontend developer - ',
		footerNick: '@deadptichka'
	},
	ua: {
		footerDesign: 'Дизайн сайту був взятий з вiльного доступу.',
		footerSub: 'Код для сайту був написаний фронтенд розробником - ',
		footerNick: '@deadptichka'
	},
	ru: {
		footerDesign: 'Дизайн сайта был взят с свободного доступа.',
		footerSub: 'Код для сайта был написан фронтенд разработчиком - ',
		footerNick: '@deadptichka'
	}
}
