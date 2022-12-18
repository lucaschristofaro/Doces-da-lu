import React from "react";

const Categories = ({ categories, filterItem }) => {
	return (
		<div className="flex items-center justify-center ">
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						className="btn-filter bg-red-50 xl:m-6 rounded-md shadow-sm text-gray-800 font-serif py-2 px-4 border-b-4 border-y-pink-300 hover:bg-teal-500 hover:text-white  "
						onClick={() => filterItem(category)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
