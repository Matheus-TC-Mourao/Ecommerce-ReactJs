import React from 'react';
import WomanImg from '../img/woman_hero.png';

export default function Hero() {
	return (
		<section className="h-[580px] bg-hero bg-no-repeat bg-cover bg-center py-24 overflow-hidden drop-shadow-lg">
			<div className="container mx-auto flex justify-around h-full">
				{/* text  */}
				<div className="flex flex-col justify-center">
					<div className="font-semibold flex items-center uppercase">
						<div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
					</div>
					<h1 className="text-[70px] leading-[1.1] font-light mb-2">
						AUTUMN SALE STYLISH
						<br />
						<span className="font-semibold">WOMENS</span>
					</h1>
				</div>
				{/* image  */}
				<div className="hidden lg:block">
					<img src={WomanImg} alt="WomanImg" />
				</div>
			</div>
		</section>
	);
}
