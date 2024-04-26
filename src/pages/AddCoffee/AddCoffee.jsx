import { Helmet } from "react-helmet-async";
import { websiteTitle } from "../../hooks/useTitle/useTitle";
import Swal from "sweetalert2";
import { useLocalIP } from "../../hooks/useIPAddress/useIPAddress";

const AddCoffee = () => {
	const handleAddCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const quantity = form.quantity.value;
		const supplier = form.supplier.value;
		const taste = form.taste.value;
		const category = form.category.value;
		const details = form.details.value;
		const photo = form.photo.value;

		const newCoffee = {
			name,
			quantity,
			supplier,
			taste,
			category,
			details,
			photo,
		};
		console.log(`newCoffee:`, newCoffee);

		// send data to the server
		fetch(`http://${useLocalIP}:5000/coffee`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Coffee added successfully",
						icon: "success",
						confirmButtonText: "Cool",
					});
				}
			});
	};

	return (
		<>
			<Helmet>
				<title>{websiteTitle} - AddCoffee</title>
			</Helmet>
			<div className="bg-[#F4F3F0] md:p-24 p-12 rounded-lg">
				<h2 className="text-3xl font-extrabold">Add a Coffee</h2>
				<form onSubmit={handleAddCoffee}>
					{/* form row 1 _ name, quantity */}
					<div className="mb-8 md:flex">
						<div className="md:w-1/2 form-control">
							<label className="label">
								<span className="label-text">Coffee Name</span>
							</label>
							<label>
								<input
									type="text"
									name="name"
									placeholder="Enter Coffee Name"
									className="w-full input input-bordered"
									required
								/>
							</label>
						</div>
						<div className="md:w-1/2 form-control md:ml-4">
							<label className="label">
								<span className="label-text">Available Quantity</span>
							</label>
							<label>
								<input
									type="text"
									name="quantity"
									placeholder="Available Quantity"
									className="w-full input input-bordered"
									required
								/>
							</label>
						</div>
					</div>
					{/* form row 2 _ Supplier, Taste */}
					<div className="mb-8 md:flex">
						<div className="md:w-1/2 form-control">
							<label className="label">
								<span className="label-text">Supplier</span>
							</label>
							<label>
								<input
									type="text"
									name="supplier"
									placeholder="Supplier Name"
									className="w-full input input-bordered"
									required
								/>
							</label>
						</div>
						<div className="md:w-1/2 form-control md:ml-4">
							<label className="label">
								<span className="label-text">Taste</span>
							</label>
							<label>
								<input
									type="text"
									name="taste"
									placeholder="Taste"
									className="w-full input input-bordered"
									required
								/>
							</label>
						</div>
					</div>
					{/* form row 3 _ Category, Details */}
					<div className="mb-8 md:flex">
						<div className="md:w-1/2 form-control">
							<label className="label">
								<span className="label-text">Category</span>
							</label>
							<label>
								<input
									type="text"
									name="category"
									placeholder="Category"
									className="w-full input input-bordered"
									required
								/>
							</label>
						</div>
						<div className="md:w-1/2 form-control md:ml-4">
							<label className="label">
								<span className="label-text">Details</span>
							</label>
							<label>
								<input
									type="text"
									name="details"
									placeholder="Details"
									className="w-full input input-bordered"
									required
								/>
							</label>
						</div>
					</div>
					{/* form row 4 _ photo url */}
					<div className="mb-8">
						<div className="w-full form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<label>
								<input
									type="text"
									name="photo"
									placeholder="Photo URL"
									className="w-full input input-bordered"
									required
								/>
							</label>
						</div>
					</div>
					<input
						className="btn btn-block bg-[#D2B48C]"
						type="submit"
						value="Add Coffee"
					/>
				</form>
			</div>
		</>
	);
};

export default AddCoffee;
