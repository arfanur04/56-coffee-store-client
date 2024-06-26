import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./layouts/Roots/Roots.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Home from "./pages/Home/Home.jsx";
import AddCoffee from "./pages/AddCoffee/AddCoffee.jsx";
import UpdateCoffee from "./pages/UpdateCoffee/UpdateCoffee.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { useLocalIP } from "./hooks/useIPAddress/useIPAddress.js";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,
		element: <Roots />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch(`http://${useLocalIP}:5000/coffee`),
			},
			{
				path: "/addCoffee",
				element: <AddCoffee />,
			},
			{
				path: "/updateCoffee/:id",
				element: <UpdateCoffee />,
				loader: ({ params }) =>
					fetch(`http://${useLocalIP}:5000/coffee/${params.id}`),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</HelmetProvider>
	</React.StrictMode>
);
