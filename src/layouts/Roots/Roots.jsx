import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";

const Roots = () => {
	return (
		<>
			<div className="max-w-6xl px-2 mx-auto">
				<Navbar />
				<Outlet />
			</div>
		</>
	);
};

export default Roots;
