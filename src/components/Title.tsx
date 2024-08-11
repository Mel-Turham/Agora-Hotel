type alignType = 'center' | 'start' | 'end';
const Title = ({
	title,
	paragraph,
	align = 'start',
}: {
	title: string;
	paragraph: string;
	align?: alignType;
}) => {
	return (
		<>
			<h3
				className={`text-[#606060] text-[35px] uppercase font-bold text-${align}`}
			>
				{title}
			</h3>
			<p className={`text-[#858a99] text-[18px] text-${align}`}>{paragraph}</p>
		</>
	);
};
export default Title;
