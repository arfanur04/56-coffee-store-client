import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../hooks/useTitle/useTitle";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Home = () => {
	const coffees = useLoaderData();

	return (
		<>
			<Helmet>
				<title>{websiteTitle}</title>
			</Helmet>
			<div className="m-20">
				<h1 className="text-5xl text-center text-purple-600 my-20">
					Hot Hot Cold Coffee: {coffees.length}
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					{coffees?.map((coffee) => (
						<CoffeeCard
							key={coffee._id}
							coffee={coffee}
						></CoffeeCard>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
