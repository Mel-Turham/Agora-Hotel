type RoomDetailsType = {
	label: string;
	icon: string;
};

type Rooms = {
	id: number;
	image: string;
	price: number;
	name: string;
	roomDetails: RoomDetailsType[];
};

export { type Rooms };
