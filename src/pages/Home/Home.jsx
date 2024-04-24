import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../hooks/useTitle/useTitle";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle}</title>
			</Helmet>
			<div>
				<h1></h1>
			</div>
		</>
	);
};

export default Home;
