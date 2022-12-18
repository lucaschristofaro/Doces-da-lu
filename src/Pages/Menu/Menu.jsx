import React, { useState } from "react";
import felicidade from "../../assets/svg/felicidade.svg";

import Categories from "./Categories";
import items from "../../data/MenuData";
import MenuItem from "./MenuItem";

const allCategories = ["Todos", ...new Set(items.map((item) => item.category))];

const Menu = () => {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	// select all items
	const filterItem = (category) => {
		if (category == "Todos") {
			setMenuItems(items);
			return;
		}
		const newItem = items.filter((item) => item.category == category);
		setMenuItems(newItem);
	};

	return (
		<div id="menu" className="bg-rose-100  mx-auto px-4">
			<div>
				<div className=" border-t-red-100  mb-5 flex justify-center text-center">
					<h2
						data-aos="fade-down-right"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						className=" text-5xl font-sans mt-4  flex items-center max-sm:text-4xl"
					>
						<span className="ml-2 mt-3   uppercase text-black font-extrabold">
							Menu
						</span>
						<img
							src={felicidade}
							className="h-8 w-8 inline rounded-sm  mt-4 ml-3 max-sm:ml-2 "
							stroke="currentColor"
						/>
					</h2>
				</div>
				<div>
					<Categories categories={categories} filterItem={filterItem} />
				</div>
				<div>
					<div>
						<MenuItem items={menuItems} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
