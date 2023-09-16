import { createBrowserRouter } from "react-router-dom";
import MovieDetails from "./pages/movie-details";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/home";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/movies/:id",
		element: <MovieDetails />,
	},
]);

export default router;
