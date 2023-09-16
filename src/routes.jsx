import { createBrowserRouter } from "react-router-dom";
import MovieDetails from "./pages/movie-details";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
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
