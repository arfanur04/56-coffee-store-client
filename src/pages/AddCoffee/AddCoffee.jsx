import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../hooks/useTitle/useTitle";

const AddCoffee = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - AddCoffee</title>
			</Helmet>
			<div>
				<h2>This is AddCoffee</h2>
			</div>
		</>
	);
};

export default AddCoffee;
