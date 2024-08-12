import { ChevronRight } from 'lucide-react';
import { Button } from '../../@/components/ui/button';
import Title from '../../components/Title';
import CardTestimonial from '../../components/CardTestimonial';
import { TestimonialsArray as data } from '../../db/data';

const Testimonials = () => {
	return (
		<section className='bg-[#F5F3F0]  px-16 py-[4rem] '>
			<div className='flex justify-between'>
				<div>
					<Title
						title='OUR GUESTS LOVE US'
						paragraph='What our guests are saying about us'
					/>
				</div>
				<Button className='p-5 text-lg uppercase rounded-sm'>
					View all reviews <ChevronRight width={24} height={24} />
				</Button>
			</div>
			<div className='mt-[4rem] flex  relative gap-8'>
				{data.map((data) => {
					const {
						UserImage,
						UserName,
						comment,
						country,
						raitingUser,
						feedBack,
						capital,
            id
					} = data;
					return (
						<CardTestimonial
							key={id}
							feedBack={feedBack}
							UserImage={UserImage}
							UserName={UserName}
							comment={comment}
							country={country}
							raitingUser={raitingUser}
							capital={capital}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Testimonials;
