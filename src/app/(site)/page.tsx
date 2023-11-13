/** @format */

import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { Fragment } from "react";
import Banner from "../../../public/appBanner.png";
import { CLIENTS } from "@/lib/constants";

const HomePage = () => {
	return (
		<>
			<section className='overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
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
			</section>
			{/* Client Slider Section Start */}
			<section className='relative'>
				<div
					className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
				">
					{[...Array(2)].map((arr) => (
						<div key={arr} className='flex flex-nowrap animate-slide'>
							{CLIENTS.map((client) => (
								<div key={client.alt} className='relative w-[200px] m-20 shrink-0 flex items-center'>
									<Image src={client.logo} alt={client.alt} width={150} className='object-contain max-w-none' unoptimized />
								</div>
							))}
						</div>
					))}
				</div>
			</section>
			{/* Client Slider Section End */}
		</>
	);
};

export default HomePage;
