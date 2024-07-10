import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon} from 'lucide-react'
import { DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";

import { Button } from "./button";

import { Calendar} from './calendar'

import { Popover , PopoverContent, PopoverTrigger} from "@radix-ui/react-popover";
import { useState } from "react";


export function DatePickerWithRange({
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(2024, 0, 20),
		to: addDays(new Date(2024, 0, 20), 20),
	});

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover >
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'secondary'}
						className={cn(
							'w-full justify-start text-center font-normal rounded-none bg-transparent',
							!date && 'text-muted-foreground',
						)}
					>
						<CalendarIcon className='w-4 h-4 mr-2 ' />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, 'LLL dd, y')} -{' '}
									{format(date.to, 'LLL dd, y')}
								</>
							) : (
								format(date.from, 'LLL dd, y')
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0 bg-white' align='start'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}