import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
	const { _id, name, quantity, supplier, taste, photo } = coffee;

	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				// Swal.fire({
				// 	title: "Deleted!",
				// 	text: "Your coffee has been deleted.",
				// 	icon: "success",
				// });

				fetch(`http://localhost:5000/coffee/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your coffee has been deleted.",
								icon: "success",
							});
						}
					});
			}
			// else {
			// 	console.log("cancel clicked");
			// }
		});
	};

	return (
		<>
			<div className="shadow-xl card card-side bg-base-100">
				<figure>
					<img
						src={photo}
						alt="Movie"
					/>
				</figure>
				<div className="flex justify-between w-full pr-4">
					<div>
						<h2 className="card-title">Name: {name}</h2>
						<p>{quantity}</p>
						<p>{supplier}</p>
						<p>{taste}</p>
					</div>
					<div className="justify-end card-actions">
						<div className="space-y-4 join join-vertical">
							<button className="btn join-item">View</button>
							<Link to={`/updateCoffee/${_id}`}>
								<button className="btn join-item">Edit</button>
							</Link>
							<button
								onClick={() => handleDelete(_id)}
								className="bg-orange-500 btn join-item"
							>
								X
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoffeeCard;

CoffeeCard.propTypes = {
	coffee: PropTypes.any,
};
