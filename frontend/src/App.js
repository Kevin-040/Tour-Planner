import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Location from "./components/getLocation/get_location";
import Navbar from "./components/Navbar";
import Hotels from "./components/Hotels/get_hotels";
import Start from './components/start';
import Footer from './components/Footer';
import Destinations from './components/Destinations';
import Hero from './components/Hero';
import Selections from './components/Selections';
import Search from './components/Search';
import Carousel from './components/Carousel'
import DateForm from "./components/getDate";

function App() {
	const user = localStorage.getItem("token");
	return (
		<>
		<BrowserRouter>
		<Navbar/>
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/location" exact element={<Location place="Vallabh Vidhyanagar, anand"/>} />
				<Route path="/hotel" exact element={<Hotels />} />
				<Route path="/dest" element={<Destinations/>}/>
				<Route path="/hero" element={<Hero/>}/>
				<Route path="/sel" element={<Selections/>}/>
				<Route path="/search" element={<Search/>}/>
				<Route path="/car" element={<Carousel/>}/>
				<Route path="/form" element={<DateForm/>}/>
			</Routes>
		
		<Footer/>
		</BrowserRouter>
		 </>
	);
}

export default App;