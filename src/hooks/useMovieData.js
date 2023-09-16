import { useQuery } from "@tanstack/react-query";
import { request } from "../services/apiClient";
import { toast } from "react-toastify";
import { TMDB_API_URL, TMDB_MOVIE_URL, TMDB_NOW_PLAYING, TMDB_SEARCH_URL, movieGenres } from "../utils/constants";

const getMovies = async () => {
	const res = await request({
		url: TMDB_API_URL,
		method: "get",
	});
	return res.data.results;
};

const searchMovie = async (value) => {
	const res = await request({
		url: TMDB_SEARCH_URL,
		method: "get",
		params: {
			query: value,
		},
	});

	return res.data.results;
};
const getRandomMovies = async () => {
	const res = await request({
		url: TMDB_NOW_PLAYING,
		method: "get",
	});
	return res.data.results.sort(() => 0.5 - Math.random())[5];
};

const getMovie = async (id) => {
	try {
		const res = await request({
			url: `${TMDB_MOVIE_URL}/${id}`,
			method: "get",
		});
		return res.data;
	} catch (error) {
		toast.error(error?.message);
	}
};

export const useSearch = (query) =>
	useQuery({
		enabled: !!query?.length,
		queryKey: ["movies", query],
		queryFn: () => searchMovie(query),
	});

export const useGenre = (genreIds) => {
	return genreIds
		.map((genreId) => {
			const genre = movieGenres.find((genre) => genre.id === genreId);
			return genre ? genre.name : "Unknown Genre";
		})
		.join(", ");
};

export const useRandomMovies = () =>
	useQuery({
		queryKey: ["random-movies"],
		queryFn: getRandomMovies,
	});

export const useMovie = (id) =>
	useQuery({
		queryKey: ["movies", id],
		queryFn: () => getMovie(id),
	});

export const useMovies = () =>
	useQuery({
		queryKey: ["top-rated-movies"],
		queryFn: getMovies,
	});

export const useCountry = (abbrev) => {
	const langToCountry = {
		en: "USA",
		hi: "India",
		es: "Spain",
		fr: "France",
		de: "Germany",
		it: "Italy",
		pt: "Portugal",
		ja: "Japan",
		zh: "China",
		ru: "Russia",
		ar: "Saudi Arabia",
		ko: "South Korea",
	};
	return langToCountry[abbrev];
};
