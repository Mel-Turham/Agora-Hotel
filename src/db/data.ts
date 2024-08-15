import {
	Deluxe,
	Single,
	KingRome,
	FamilyRome,
	Honeymoon,
	Acropolis,
	Santorini,
	Zakynthos,
	User_1,
	User_2,
	User_3,
	Event_1,
	Event_2,
	Event_3,
} from '../assets';
import {
	DiscoverTypes,
	EventsTypes,
	Rooms,
	TestimonialsTypes,
} from '../types/types';
import wifi from '../assets/svg/wifi.svg';
import coffee from '../assets/svg/coffee.svg';
import martini from '../assets/svg/martini.svg';
import bed from '../assets/svg/bed.svg';
import monitor from '../assets/svg/monitor.svg';
import person from '../assets/svg/person-standing.svg';
import snowflake from '../assets/svg/snowflake.svg';
import smartphone from '../assets/svg/smartphone.svg';
import utensils from '../assets/svg/utensils.svg';
import privateBalcon from '../assets/svg/balcon.svg';
import { CarouselTypes } from '../types/types';
import {
	Restarant,
	Spa,
	Swimming,
	Conference,
	SwimmingIcon,
	ConferenceIcon,
	SpaIcon,
	Plate,
} from '../assets/index';

const rooms: Rooms[] = [
	{
		id: 1,
		image: Deluxe,
		name: 'Deluxe room',
		price: 199,
		roomDetails: [
			{
				label: 'Mini bar',
				icon: martini,
			},
			{
				label: 'Sauna',
				icon: bed,
			},
			{
				label: 'Wifi',
				icon: wifi,
			},

			{
				label: 'Break Fast',
				icon: utensils,
			},
			{
				label: 'Coffee',
				icon: coffee,
			},
			{
				label: 'Hair Dryer',
				icon: person,
			},
			{
				label: 'Free to use smartphone',
				icon: smartphone,
			},
			{
				label: 'WiderScreen',
				icon: monitor,
			},
			{
				label: 'Air conditioner',
				icon: snowflake,
			},
		],
	},

	{
		id: 2,
		image: Single,
		name: 'Single room',
		price: 210,
		roomDetails: [
			{
				label: 'Wifi',
				icon: wifi,
			},
			{
				label: 'Private balcony',
				icon: privateBalcon,
			},
			{
				label: 'Sauna',
				icon: bed,
			},
			{
				label: 'Break fast',
				icon: utensils,
			},
		],
	},

	{
		id: 3,
		image: FamilyRome,
		name: 'Family room',
		price: 189,
		roomDetails: [
			{
				label: 'Wifi',
				icon: wifi,
			},
			{
				label: 'Private balcony',
				icon: privateBalcon,
			},
			{
				label: 'Sauna',
				icon: bed,
			},
			{
				label: 'Break fast',
				icon: utensils,
			},
		],
	},

	{
		id: 4,
		image: KingRome,
		name: 'King room',
		price: 111,
		roomDetails: [
			{
				label: 'Wifi',
				icon: wifi,
			},
			{
				label: 'Private balcony',
				icon: privateBalcon,
			},
			{
				label: 'Sauna',
				icon: bed,
			},
			{
				label: 'Break fast',
				icon: utensils,
			},
		],
	},

	{
		id: 5,
		image: Honeymoon,
		name: 'Honeymoon room',
		price: 30,
		roomDetails: [
			{
				label: 'Wifi',
				icon: wifi,
			},
			{
				label: 'Private balcony',
				icon: privateBalcon,
			},
			{
				label: 'Sauna',
				icon: bed,
			},
			{
				label: 'Break fast',
				icon: utensils,
			},
		],
	},
];

const carouselElments: CarouselTypes[] = [
	{
		id: 1,
		image: Restarant,
		icon: Plate,
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
		title: 'Restorant',
	},
	{
		id: 2,
		image: Spa,
		icon: SpaIcon,
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
		title: 'Spa - Beauty & Health',
	},
	{
		id: 3,
		image: Conference,
		icon: ConferenceIcon,
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
		title: 'Conference Room',
	},
	{
		id: 4,
		image: Swimming,
		icon: SwimmingIcon,
		desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
		title: 'Swimming Pool',
	},
];

const DiscoverData: DiscoverTypes[] = [
	{ id: 1, image: Swimming, title: 'Navagio' },
	{
		id: 2,
		image: Zakynthos,
		title: 'Zakynthos',
	},
	{ id: 3, image: Santorini, title: 'Santorini' },
	{ id: 4, image: Acropolis, title: 'Acropolis' },
];

const TestimonialsArray: TestimonialsTypes[] = [
	{
		id: 1,
		feedBack: 'Nice Place',
		raitingUser: 5,
		comment:
			'Fantastic location in a historic renovated monastery in the heart of the Castro. Staff were helpful and knowledgeable and everything in easy walking distance.',
		UserImage: User_2,
		UserName: 'Ina Aldrich',
		country: 'Greece',
		capital: 'Athens',
	},
	{
		id: 2,
		feedBack: 'Perfect',
		raitingUser: 5,
		comment:
			'The owner and staff were extremely helpful and kind and took time to ensure that we had extra information on things to do in the area and places to visit.',
		UserImage: User_1,
		UserName: 'John Doe',
		country: 'Italy',
		capital: 'Rome',
	},
	{
		id: 3,
		feedBack: 'Good choice',
		raitingUser: 5,
		comment:
			"Extremely nice environment, the room was great, the service was awesome, really helpful and great service I'll visit them again in the near future.",
		UserImage: User_3,
		UserName: 'William W',
		country: 'Portugal',
		capital: 'Lisbone',
	},
];

const cartEventArray: EventsTypes[] = [
	{
		id: 1,
		image: Event_3,
		titleEvent: 'Hotel Zante in pictures',
		descEvent:
			'  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione inventore. Esse deserunt ad atque autem ex ullam? Nemo porro vitae nisi placeat quam adipisci eum, incidunt similique maxime, quibusdam nesciunt perferendis dolorem, obcaecati beatae libero. Magni praesentium, veritatis sapiente placeat ullam reprehenderit. Voluptates rerum perspiciatis rem suscipit laborum odio.  ',
		EventAuthor: 'Admin',
		EventDate: new Date(),
		Comments: 8,
	},
	{
		id: 2,
		image: Event_2,
		titleEvent: '10 Things You Should Know',
		descEvent:
			' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, maiores eaque! Consequatur unde, deserunt repellat error fugiat ipsa possimus ducimus accusantium adipisci provident illum soluta officiis, totam laudantium sint facilis dolorem quibusdam facere recusandae rem, repellendus eum voluptatum alias. Aliquid eaque molestias ipsam modi et eligendi sequi sunt tempora magni? ',
		EventAuthor: 'Admin',
		EventDate: new Date(),
		Comments: 4,
	},
	{
		id: 3,
		image: Event_1,
		titleEvent: 'Hotel Zante Weddings',
		descEvent:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium ipsa est reprehenderit rerum pariatur? Sunt, optio porro. Dignissimos, repellat corrupti. Eos, voluptatum incidunt accusamus cum quaerat laborum nihil, sequi vel odit, nam numquam! Aliquid voluptates numquam quibusdam fuga temporibus delectus facilis cumque laborum voluptate aspernatur? Autem commodi consequuntur mollitia. ',
		EventAuthor: 'Admin',
		EventDate: new Date(),
		Comments: 0,
	},
];

export {
	rooms,
	carouselElments,
	DiscoverData,
	TestimonialsArray,
	cartEventArray,
};
