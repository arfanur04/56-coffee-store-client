import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<ul className="flex justify-center gap-2 my-4">
				<li>
					<Link
						className="btn"
						to={"/"}
					>
						H
					</Link>
				</li>
				<li>
					<Link
						className="btn"
						to={"/addCoffee"}
					>
						Add
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
