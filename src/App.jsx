import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";

import "./App.scss";

import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
		</div>
	);
}

export default App;
