import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Roots = () => {
	return (
		<>
			<div className="max-w-6xl px-2 mx-auto">
				<Navbar />
				<h1 className="mb-6 text-5xl text-center text-purple-600">
					Coffee Store
				</h1>
				<Outlet />
			</div>
		</>
	);
};

export default Roots;
