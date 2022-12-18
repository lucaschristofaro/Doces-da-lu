import React from "react";
import cupcake from "../../assets/svg/cake.svg";
import donut from "../../assets/svg/donut.svg";

const Services = () => {
	return (
		<div>
			<div id="services" className=" border-rose-400">
				<section className="bg-red-100 text-black">
					<div
						className="max-w-screen-xl px-4 py-8 sm:px-6 justify-center lg:px-8"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						<div className="max-w-xl">
							<div>
								<h2 className=" text-3xl justify-center ml-6 flex items-center font-bold sm:text-4xl">
									<img
										src={cupcake}
										className="h-10 w-10 inline"
										stroke="currentColor"
									></img>
									<a className="ml-8	 ">Conheça nossos Serviços</a>
									<img
										src={donut}
										className="h-10  w-10 max-sm:mr-4 rounded-sm ml-4"
										stroke="currentColor"
									/>
								</h2>
							</div>
						</div>
						{/* Cards */}
						<div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
							<div className="flex items-start">
								<span className="cardSvg">
									<img
										src="https://www.svgrepo.com/show/76664/cake.svg"
										className="h-5 w-5"
										stroke="currentColor"
									/>
								</span>

								<div className="ml-4">
									<h2 className="text-lg font-bold">Bolos</h2>

									<p className="mt-1 text-sm ">
										O Bolo sempre é a estrela da festa. Temos diversos sabores
										deliciosos e modelos para todas as ocasiões..
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<span className="cardSvg">
									<img src={donut} className="h-5 w-5" stroke="currentColor" />
								</span>

								<div className="ml-4">
									<h2 className="text-lg font-bold">Cupcakes</h2>

									<p className="mt-1 text-sm ">
										Uma dieta equilibrada é um cupcake em cada mão.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<span className="cardSvg">
									<img
										src="https://www.svgrepo.com/show/284134/donut.svg"
										color="currentColor"
										alt=""
										className="h-5 w-5"
									/>
								</span>

								<div className="ml-4">
									<h2 className="text-lg font-bold">Donuts</h2>

									<p className="mt-1 text-sm ">
										Fui atrás da felicidade e voltei com uma caixa de donuts.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<span className="cardSvg">
									<img
										src="https://www.svgrepo.com/show/138672/cake.svg"
										className="h-5 w-5"
										stroke="currentColor"
									/>
								</span>

								<div className="ml-4">
									<h2 className="text-lg font-bold">Bolo de Pote</h2>

									<p className="mt-1 text-sm ">
										Bolo e amor no pote, combinação perfeita!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Services;
