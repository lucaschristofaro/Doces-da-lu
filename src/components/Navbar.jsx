import { useState } from "react";

import { GiCupcake } from "react-icons/gi";

const Navbar = () => {
	let [open, setopen] = useState(false);
	const menus = [
		{ name: "INICIO", link: "#page-top" },
		{ name: "SERVIÇOS", link: "#services" },
		{ name: "MENU", link: "#menu" },
		{ name: "GALERIA", link: "#gallery" },
		{ name: "CONTATO", link: "#contact" },
	];
	return (
		<nav className=" bg-red-50 bg-opacity-90	sticky top-0 z-30 flex items-center justify-between pt-4">
			<img
				src={
					open
						? "../images/assets/icon-close.svg"
						: "../images/assets/icon-hamburger.svg"
				}
				className="md:hidden  fixed right-5 cursor-pointer hover:opacity-40 hover:text-red-600 z-20 top-10"
				onClick={() => setopen(!open)}
			/>
			<div className="brand-logo text-xl flex items-center cursor-pointer font-extrabold hover:opacity-90 hover:text-rose-400 hover:transition-shadow duration-150 py-4 top-4 shrink-0 px-7">
				<a to=" ">
					Doces Da Lu <GiCupcake className="text-3xl inline mb-2 " />
				</a>{" "}
			</div>
			<ul
				className={`bg-[#ffffff14] backdrop-blur-md  md:pl-8 md:inline pr-10 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen  ${
					!open ? "right-[-100%] " : "right-0"
				}`}
			>
				{menus.map((menu, index) => (
					<li
						key={index}
						className="md:inline-block  md:ml-5 ml-5 md:my-0 my-6 border-b-2 border-transparent  duration-300"
					>
						<div className=" cursor-pointer font-Barlow font-normal hover:opacity-40 hover:text-rose-600 text-sm inline-block md:py-1 py-3">
							<span className="font-bold mr-1.5">
								<a href={menu.link}>{menu.name}</a>{" "}
							</span>
						</div>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default Navbar;
