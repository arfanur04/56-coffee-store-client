import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Roots = () => {
	return (
		<div>
			<Navbar />
			<h1 className="text-5xl text-purple-600 text-center">Coffee Store</h1>
			<Outlet />
		</div>
	);
};

export default Roots;
