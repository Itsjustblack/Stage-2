import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetails from "./pages/movie-details";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/movies/:id"
					element={<MovieDetails />}
				/>
				<Route
					path="*"
					element={<NotFoundPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
