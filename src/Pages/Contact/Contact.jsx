import React from "react";
import {
	DeviceMobileIcon,
	LocationMarkerIcon,
	MailIcon,
} from "@heroicons/react/outline";

const Contact = () => {
	return (
		<div id="contact" className="bg-red-100 ">
			<div className="relative mx-auto py-10 px-4 w-full max-w-7xl ">
				<div className="mx-auto max-w-5xl">
					{/* :DOTS BACKGROUND */}
					<div>
						{/* ::Dots 1 */}
						<span className="absolute top-0 left-0 hidden md:block opacity-10">
							<svg
								width={250}
								height={600}
								fill="none"
								viewBox="0 0 250 600"
								aria-hidden="true"
							>
								<pattern
									id="pattern-rectangles"
									x={0}
									y={0}
									width={40}
									height={40}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={10}
										height={10}
										className="text-green-500"
										fill="currentColor"
									/>
								</pattern>
								<rect
									width={250}
									height={600}
									fill="url(#pattern-rectangles)"
								/>
							</svg>
						</span>
						{/* ::Dots 2 */}
						<span className="absolute bottom-0 right-0 opacity-20">
							<svg
								width={300}
								height={300}
								fill="none"
								viewBox="0 0 300 300"
								aria-hidden="true"
							>
								<pattern
									id="pattern-circles"
									x="0"
									y="0"
									width="30"
									height="30"
									patternUnits="userSpaceOnUse"
									patternContentUnits="userSpaceOnUse"
								>
									<circle
										id="pattern-circle"
										cx="10"
										cy="10"
										r="5"
										className="fill-current text-green-500"
									/>
								</pattern>
								<rect
									id="rect"
									x="0"
									y="0"
									width="100%"
									height="100%"
									fill="url(#pattern-circles)"
								/>
							</svg>
						</span>
					</div>

					{/* :MAIN CONTAINER */}
					<div className="relative space-y-5">
						{/* ::Title */}
						<h2 className="text-center text-5xl text-green-500 font-light">
							Contato
						</h2>

						{/* ::Some Text */}
						<p className="mx-auto py-5 max-w-3xl text-center text-base text-gray-600">
							Entre em contato conosco,sua mensagem será muito importante para
							gente
						</p>

						{/* ::Infos Container */}
						<div className="flex flex-wrap justify-between items-center text-base">
							{/* :::Address */}
							<div className="m-2.5 inline-flex items-center">
								<LocationMarkerIcon className="mr-2 w-6 h-6 text-green-500" />
								<p className="text-gray-600 font-semibold">
									José Camilo Coelho , 11 , São João del Rei
								</p>
							</div>
							{/* :::Phone */}
							<div className="m-2.5 inline-flex items-center">
								<DeviceMobileIcon className="mr-2 w-6 h-6 text-green-500" />
								<p className="text-gray-600 font-semibold">
									<a
										href="https://whatsa.me/5532998522742/?t=Ol%C3%A1%20gostaria%20de%20um%20bolo"
										target="_blank"
									>
										(32) 99852-2742
									</a>
								</p>
							</div>
							{/* :::Address */}
							<div className="m-2.5 inline-flex items-center">
								<MailIcon className="mr-2 w-6 h-6 text-green-500" />
								<p className="text-gray-600 font-semibold">
									docesdalucontato@gmail.com
								</p>
							</div>
						</div>
					</div>

					{/* :MAP CONTAINER */}
					{/* Embed Google map */}

					<div
						data-aos="fade-up"
						data-aos-duration="700"
						className="relative mt-16 rounded border-2 border-gray-200"
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.053508909819!2d-44.25235098527172!3d-21.110432781546898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c87520530e77%3A0xea1aa87c43f92fcf!2sR.%20Jos%C3%A9%20Camilo%20Coelho%2C%20111%20-%20F%C3%A1bricas%2C%20S%C3%A3o%20Jo%C3%A3o%20del%20Rei%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1671298893054!5m2!1spt-BR!2sbr"
							title="map"
							width="100%"
							height="450"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
