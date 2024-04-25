import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<ul className="flex justify-center gap-2 my-4">
				<li className="btn">
					<Link to={"/"}>H</Link>
				</li>
				<li className="btn">
					<Link to={"/addCoffee"}>Add</Link>
				</li>
				<li className="btn">
					<Link to={"/updateCoffee"}>Update</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
