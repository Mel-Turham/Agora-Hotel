import { ReactNode } from 'react';

const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<section className={`${className} px-28`}>
			{children}
		</section>
	);
};

export default Container;
