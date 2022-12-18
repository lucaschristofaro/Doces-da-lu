import { GiCupcake } from "react-icons/gi";

import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="px-3 py-8 text-gray-800 transition-colors duration-200 bg-red-200	  text-2 "
		>
			<div className="flex flex-col">
				<div className="h-px mx-auto rounded-full md:hidden mt-7 w-11"></div>
				<div className="flex flex-col mt-4 md:mt-0 md:flex-row">
					<nav className="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
						<a
							aria-current="page"
							href="#gallery"
							className="transition-colors duration-200 hover:text-gray-800 dark:hover:text-white "
						>
							Galeria
						</a>
						<a
							aria-current="page"
							href="#services"
							className=" transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
						>
							Serviços
						</a>
					</nav>
					<div className="h-px mx-auto mt-4 rounded-full md:hidden w-11"></div>
					<div className="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
						<a className="hover:text-primary-gray-20" href="#">
							<GiCupcake className="w-8 h-8  transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
						</a>
						<a
							className="ml-4 hover:text-primary-gray-20"
							href="https://whatsa.me/5532998522742/?t=Ol%C3%A1%20gostaria%20de%20um%20bolo"
							target="_blank"
						>
							<IoLogoWhatsapp
								className="w-7 h-7  transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
								fill="currentColor"
							></IoLogoWhatsapp>
						</a>
						<a className="ml-4 hover:text-primary-gray-20" href="#">
							<BsInstagram className="w-7 h-7  transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"></BsInstagram>
						</a>
					</div>
					<div className="h-px mx-auto mt-4 rounded-full md:hidden w-11 "></div>
					<div className="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
						<span className="">© 2022</span>
						<span className="mt-7 md:mt-1">
							Created by
							<a
								className="underline hover:text-primary-gray-20"
								href="https://www.linkedin.com/in/crabiller/"
								target="_blank"
							>
								Lucas
							</a>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
