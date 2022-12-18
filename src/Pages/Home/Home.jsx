import { BsWhatsapp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/doces/banner1.jpg";

const Home = () => {
	AOS.init();
	return (
		<div className="border-t-4 border-rose-400 ">
			<div data-aos="flip-up" data-aos-duration="1500">
				<section className="relative bg-[url(https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80)] bg-cover bg-center bg-no-repeat">
					<div className="absolute inset-0 bg-white/40 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/30 sm:to-white/25"></div>

					<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
						<div className="max-w-xl text-center sm:text-left">
							<div data-aos="fade-down" data-aos-duration="1000">
								<h1 className="text-3xl font-extrabold font-Paytone  sm:text-5xl">
									Doces da Lu
									<strong className="block text-4xl font-extrabold text-rose-700">
										A felicidade mora num pedaço de bolo{" "}
									</strong>
								</h1>
							</div>

							<div className="mt-8 flex flex-wrap gap-4 text-center">
								<div data-aos="fade-right" data-aos-duration="1000">
									<a
										href="#menu"
										className="block w-full text-black rounded shadow-lg shadow-rose-400 bg-rose-400 px-12 py-3 text-sm hover:text-white font-semibold max-sm:w-4/5 hover:bg-rose-700 hover:shadow-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
									>
										Confira nosso cardápio{" "}
									</a>
								</div>
								<a
									href="https://whatsa.me/5532998522742/?t=Ol%C3%A1%20gostaria%20de%20um%20bolo"
									target="_blank"
								>
									<BsWhatsapp className="text-rose-500 max-sm:mt-6 w-7 h-7 mt-4 ml-2" />
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
