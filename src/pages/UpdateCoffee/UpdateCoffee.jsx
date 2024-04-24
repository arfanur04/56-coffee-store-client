import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../hooks/useTitle/useTitle";

const UpdateCoffee = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - UpdateCoffee</title>
			</Helmet>
			<div>
				<h2>This is UpdateCoffee</h2>
			</div>
		</>
	);
};

export default UpdateCoffee;
