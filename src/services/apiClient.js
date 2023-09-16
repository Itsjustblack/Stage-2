import axios from "axios";
import { TMDB_API_KEY } from "../utils/constants";

const client = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${TMDB_API_KEY}`,
	},
});

export const request = ({ ...options }) => {
	const onSuccess = (response) => response;
	const onError = (error) => {
		return error;
	};

	return client(options).then(onSuccess).catch(onError);
};
