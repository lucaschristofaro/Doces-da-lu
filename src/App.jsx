import React from "react";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "smooth-scroll";
import Carousel from "./components/Carousel";

//pages
import Menu from "./Pages/Menu/Menu";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

function App() {
	return (
		<div className="App">
			<div className="overflow-x-auto">
				<Navbar />
				<Home />
				<Services />
				<Carousel />
				<Menu />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
