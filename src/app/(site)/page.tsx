/** @format */

import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { Fragment } from "react";
import Banner from "../../../public/appBanner.png";

const HomePage = () => {
	return (
		<section>
			<div className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
				<TitleSection
					pill='✨ Optimized Workspace Experience'
					title={
						<Fragment>
							Integrated {""}
							<span className='dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple text-transparent bg-clip-text'>
								Collaboration
							</span>{" "}
							and Productivity Hub
						</Fragment>
					}
				/>
				<div className='bg-white p-[2px] mt-[6] rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue  sm:w-[300px] mt-3'>
					<Button variant={"secondary"} className='w-full rounded-[10px] p-6 text-2xl bg-background'>
						Get
						<span className='dark:bg-gradient-to-r dark:from-brand-primaryBlue dark:to-brand-primaryPurple text-transparent bg-clip-text px-2'>
							KeepiT
						</span>
						Free
					</Button>
				</div>
				<div className='md:mt-[-40px] sm:w-full w-[750px] flex justify-center items-center mt-[-40px] relative sm:ml-0 ml-[-50px]'>
					<Image src='/appBanner.png' alt='Application Banner' width={1359} height={710} unoptimized />
				</div>
			</div>
		</section>
	);
};

export default HomePage;
