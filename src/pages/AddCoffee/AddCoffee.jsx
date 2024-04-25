import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../hooks/useTitle/useTitle";

const AddCoffee = () => {
	return (
		<>
			<Helmet>
				<title>{websiteTitle} - AddCoffee</title>
			</Helmet>
			<div>
				<h2 className="ml-24">Add a Coffee</h2>
				<form>
					<div className="flex gap-6">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Coffee Name</span>
							</label>
							<label>
								<input
									type="text"
									placeholder="Coffee Name"
									className="input input-bordered"
									required
								/>
							</label>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Available Quantity</span>
							</label>
							<label>
								<input
									type="text"
									placeholder="Available Quantity"
									className="input input-bordered"
									required
								/>
							</label>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddCoffee;
