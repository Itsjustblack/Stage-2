/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";
import { useMovies, useSearch } from "../hooks/useMovieData";

const Home = () => {
	const [query, setQuery] = useState("");
	const { data: searchMovies, isLoading } = useSearch(query);
	const { data } = useMovies();

	return (
		<>
			<Hero
				query={query}
				setQuery={setQuery}
			/>
			<section className="mt-[70px] px-10 xl:px-[95px]">
				<div className="flex items-center justify-between">
					<span className="font-bold text-4xl">{query === "" ? "Top Rated Movies" : "Search Results"}</span>
					<div className="flex items-center">
						<span className="text-lg text-[#BE123C]">See more</span>
						<img
							src="/assets/chevron-right.svg"
							alt=""
						/>
					</div>
				</div>
				{query !== "" || isLoading ? (
					<div className="mt-[44px] grid justify-center items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[80px] gap-y-[103px]">
						{searchMovies?.map((movie, index) => (
							<MovieCard
								key={index}
								id={movie.id}
								title={movie.original_title}
								image={movie.poster_path}
								date={movie.release_date}
								genres={movie.genre_ids}
								lang={movie.original_language}
								votes={movie.vote_average}
							/>
						))}
					</div>
				) : (
					<Loader />
				)}
				{query.length === 0 && (
					<div className="mt-[44px] grid justify-center items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[80px] gap-y-[103px]">
						{data?.map((movie, index) => (
							<MovieCard
								key={index}
								id={movie.id}
								title={movie.title}
								image={movie.poster_path}
								date={movie.release_date}
								genres={movie.genre_ids}
								lang={movie.original_language}
								votes={movie.vote_average}
							/>
						))}
					</div>
				)}
			</section>
			<Footer />
		</>
	);
};

export default Home;
