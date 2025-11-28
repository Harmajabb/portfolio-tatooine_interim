import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "./index.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mercenaries from "./pages/Mercenaries.tsx";
import Recrutment from "./pages/Recrutment.tsx";
import NosMissions from "./pages/NosMissions.tsx";
import SecretPage from "./pages/SecretPages.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <SecretPage />,
			},
			{
				path: "Home",
				element: <Home />,
			},
			{
				path: "/pages/Mercenaries",
				element: <Mercenaries />,
			},
			{
				path: "/pages/NosMissions",
				element: <NosMissions />,
			},
			{
				path: "/pages/Recrutment",
				element: <Recrutment />,
			},
			{
				path: "/pages/About",
				element: <About />,
			},
			{
				path: "/pages/Contact",
				element: <Contact />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
