type RoomDetails = {
	label: string;
	icon: string;
};

type CardRomType = {
	image: string;
	id: number;
	price: number;
	name: string;
	roomDetails: RoomDetails[];
	onMouseEnter: (id: number) => void;
	onMouseLeave: () => void;
};

const CardRoom = ({
	image,
	price,
	id,
	name,
	roomDetails,
	onMouseEnter,
	onMouseLeave,
}: CardRomType) => {
	return (
		<div
			className='relative rounded-sm shadow-sm'
			onMouseEnter={() => onMouseEnter(id)}
			onMouseLeave={() => onMouseLeave}
		>
			<span className='absolute top-0 right-0 text-black bg-white'>
				{price}
			</span>
			<figure>
				<img
					src={image}
					alt={name}
					loading='lazy'
					className='object-cover w-full h-full'
				/>
			</figure>
			<figcaption>
				{roomDetails.map((detail, index) => {
					return (
						<div key={index}>
							<span>{detail.icon}</span>
							<span>{detail.label}</span>
						</div>
					);
				})}
			</figcaption>
		</div>
	);
};

export default CardRoom;
