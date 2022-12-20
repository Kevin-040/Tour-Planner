import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Location from "./components/Location/get_location";
import Navbar from "./components/Navbar";
import Hotels from "./components/Hotels/get_hotels";
import Start from './components/start';
import Footer from './components/Footer';
import Destinations from './components/Destinations';
import Detail01 from './components/Detail_1';
import Selections from './components/Selections';
import Search from './components/Search';
import Carousel from './components/Carousel'
import DateForm from "./components/getDate";
import ViewMap from "./components/Map/viewMap";
import Attraction from "./components/Attractions/attraction";
import { useState } from "react";
import NotFound from "./components/notFound";
import About from "./components/Aboutus";
import Translate from "./Translator/Translate";

function App() {
	// const user = localStorage.getItem("token");
	// console.log(localStorage.getItem("my-key"))

	const [token,setToken] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(Boolean);

	if(localStorage.getItem("Token")===""){
		setIsLoggedIn(false)
	}

	return (
		<>
		<div className="flex flex-col h-screen">
			<BrowserRouter>
			<Navbar setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
			<div className='mt-20 flex-auto w-full'>
				<Routes>
					<Route path="/start" element={<Start isLoggedIn={isLoggedIn}/>} />
					<Route path="/signup" exact element={<Signup />} />
					<Route path="/" exact element={<Login setToken={setToken} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
					<Route path="/location" exact element={<Location/>} />
					<Route path="/hotel" exact element={<Hotels />} />
					<Route path="/map" element={<ViewMap/>}/>
					<Route path="/dest" element={<Attraction/>}/>
					<Route path="/d1" element={<Detail01/>}/>
					<Route path="/sel" element={<Selections/>}/>
					<Route path="/search" element={<Search/>}/>
					<Route path="/car" element={<Carousel/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/translate" element={<Translate/>}/>

					{/* <Route path="/contact" element={<Contact/>}/> */}
					<Route path="/*" element={<NotFound/>}/>
					{/* <Route path="/form" element={<DateForm/>}/> */}
				</Routes>
			</div>
			<div className="flex-shrink-0">
			<Footer/>
			</div>
			</BrowserRouter>
		</div>
		 </>
	);
}

export default App;