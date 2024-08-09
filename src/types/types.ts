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

type CarouselTypes = {
	id: number;
	image: string;
	icon: string;
	desc: string;
	title: string;
};

export { type Rooms, type CarouselTypes };
