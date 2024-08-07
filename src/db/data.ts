import { Deluxe, Single, KingRome, FamilyRome, Honeymoon } from '../assets';
import { Rooms } from '../types/types';
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

export { rooms };
