/* eslint-disable react/prop-types */
import LazyLoadImage from "../components/LazyLoadImage";
import { Nav } from "../components/Nav";
import Rating from "../components/Rating";
import { useRandomMovies } from "../hooks/useMovieData";

const Hero = ({ query, setQuery }) => {
	const { data: movie } = useRandomMovies();
	return (
		<header className="relative w-full h-[600px] bg-slate-700">
			<LazyLoadImage
				className="w-full h-[600px] object-cover absolute z-0"
				src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
			/>
			<div className="relative px-10 xl:px-[95px] py-4 z-10">
				<Nav
					query={query}
					setQuery={setQuery}
				/>
				<div className="flex flex-col gap-y-4 pt-[78px] text-white items-center text-center lg:items-start lg:text-left w-full xl:w-[404px]">
					<h1 className="font-bold text-[65px] lg:text-[48px] leading-[56px]">{movie?.title}</h1>
					<div className="w-[184px] text-white">
						<Rating votes={movie?.vote_average} />
					</div>
					<p className="font-medium text-sm leading-[20px] max-w-[302px]">{movie?.overview}</p>
					<div className="outline-0 w-fit flex items-center rounded-md gap-x-2 px-4 py-2 bg-[#BE123C]">
						<img
							src="/assets/play.svg"
							alt=""
						/>
						<span className="font-bold text-sm">WATCH TRAILER</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
