/** @format */

import TitleSection from "@/components/landing-page/title-section";
import React from "react";

const HomePage = () => {
	return (
		<section>
			<div className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
				<TitleSection pill='✨ Optimized Workspace Experience' title='Integrated Collaboration and Productivity Hub' />
			</div>
		</section>
	);
};

export default HomePage;
