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
type DiscoverTypes = {
	id: number;
	image: string;
	title: string;
};
type TestimonialsTypes = {
	id: number;
	feedBack: string;
	raitingUser: number;
	comment: string;
	UserImage: string;
	UserName: string;
	country: string;
	capital: string;
};

type EventsTypes = {
	id: number;
	image: string;
	titleEvent: string;
	descEvent: string;
	EventAuthor: string;
	EventDate: Date | null;
	Comments: number;
};

type BranchesType = {
	id: number;
	figure:string,
	localisation:string,
	phone:string,
	email:string,
	city:string
};

export {
	type Rooms,
	type CarouselTypes,
	type DiscoverTypes,
	type TestimonialsTypes,
	type EventsTypes,
	type BranchesType
};
