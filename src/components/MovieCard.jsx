/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useCountry, useGenre } from "../hooks/useMovieData";
import LazyLoadImage from "./LazyLoadImage";
import Like from "./Like";
import Rating from "./Rating";

const MovieCard = ({ id, title, date, image, genres, lang, votes }) => {
	const genre = useGenre(genres);
	const country = useCountry(lang);
	const navigate = useNavigate();
	return (
		<div
			data-testid="movie-card"
			className="relative w-[250px] h-[490px] flex flex-col gap-y-3 group justify-self-center"
		>
			<div className="absolute w-full flex items-center justify-end px-4 mt-4 z-10">
				<Like title={title} />
			</div>
			<div onClick={() => navigate(`/movies/${id}`)}>
				<div className="h-[370px] overflow-hidden z-0 bg-slate-800">
					<LazyLoadImage
						testid="movie-poster"
						className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
						src={`https://image.tmdb.org/t/p/w500/${image}`}
					/>
				</div>
				<div className="flex text-[12px] text-[#9CA3AF] font-bold mt-2 gap-x-2">
					<p>{country}</p>
					<p data-testid="movie-release-date">{date}</p>
				</div>
				<span
					data-testid="movie-title"
					className="text-[18px] text-[#111827] font-bold"
				>
					{title}
				</span>
				<div className="text-[#111827]">
					<Rating votes={votes} />
				</div>
				<p className="text-[12px] text-[#9CA3AF] font-bold">{genre}</p>
			</div>
		</div>
	);
};

export default MovieCard;
