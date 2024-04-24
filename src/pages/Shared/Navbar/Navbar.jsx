import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<ul className="flex gap-2 justify-center my-4">
				<li className="btn">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="btn">
					<Link to={"/addCoffee"}>Add Coffee</Link>
				</li>
				<li className="btn">
					<Link to={"/updateCoffee"}>Update Coffee</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
