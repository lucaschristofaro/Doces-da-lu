import React from "react";

import "aos/dist/aos.css";

const MenuFilter = ({ items }) => {
	return (
		<div className="w-full max-w-5xl  p-5 pb-10 mx-auto gap-5 columns-3 space-y-5  max-sm:columns-2 max-sm:max-w-2xl">
			{items.map((menuItem) => {
				const { id, title, image } = menuItem;

				return (
					<div
						data-aos="zoom-in"
						data-aos-delays="400"
						data-aos-duration="950"
						key={id}
					>
						<img
							className="  transition  hover:opacity-100  hover:border-[rgba(208,50,75,1)]   duration-500 rounded-xl hover:border-8 cursor-pointer  "
							src={image}
							alt={title}
							title={title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default MenuFilter;
