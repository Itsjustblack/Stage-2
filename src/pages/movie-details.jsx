import { useParams } from "react-router-dom";
import LazyLoadImage from "../components/LazyLoadImage";
import { ClientNav } from "../components/Nav";
import { useMovie } from "../hooks/useMovieData";

const MovieDetails = () => {
	const { id } = useParams();
	const { data: movie } = useMovie(id);
	const genres = movie?.genres.map((genre) => genre.name);
	console.log(genres);
	return (
		<div className="lg:grid grid-cols-[226px_auto] gap-x-[37px] h-screen lg:overflow-hidden">
			<ClientNav />
			<main className="py-10 lg:pt-[38px] px-10 lg:pr-[51px]">
				<header className="relative flex justify-center items-center w-full h-[449px] rounded-[20px] overflow-hidden">
					<LazyLoadImage
						className="w-full h-full object-cover absolute z-0"
						src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
					/>
					<div className="relative z-10">
						<div className="w-[110px] h-[110px] backdrop-blur-[1px] flex justify-center items-center bg-[#ffffff59] rounded-full border-2 border-[#e8e8e833] mx-auto hover:scale-110 transition-transform duration-300">
							<img
								className="w-[54px] h-[54px]"
								src="/assets/play_movie.svg"
								alt=""
							/>
						</div>
						<span className="text-[25px] text-[#e8e8e8] font-medium font-poppins drop-shadow-[0px_2px_4px_#00000040]">Watch Trailer</span>
					</div>
				</header>
				<div className="mt-8 mb-10 grid grid-cols-[2fr_1fr] gap-x-7 font-poppins">
					<div>
						<div className="flex items-center gap-x-5">
							<div className="font-poppins text-[#404040] text-2xl font-bold gap-x-[30px] leading-[40px]">
								<span data-testid="movie-title">{`${movie?.original_title}    •`}</span>
								<span data-testid="movie-release-date">{`    ${new Date(movie?.release_date).toUTCString()}  •`}</span>
								<span data-testid="movie-runtime">{`   ${movie?.runtime} `}</span>
								{"Minutes"}
							</div>
							<div className="flex gap-x-3 items-center">
								{genres?.map((item, index) => (
									<div
										key={index}
										className="text-[#B91C1C] border border-[#F8E7EB] rounded-2xl py-1 px-[18px]"
									>
										{item}
									</div>
								))}
							</div>
						</div>
						<p
							data-testid="movie-overview"
							className="text-xl text-[#333] mt-6"
						>
							{movie?.overview}
						</p>
						<div className="flex flex-col gap-y-[31px] mt-5">
							<p className="text-[#333] text-xl">
								Director <span className="text-[#BE123C]">: Joseph Kosinski</span>
							</p>
							<p className="text-[#333] text-xl">
								Writers <span className="text-[#BE123C]">: Jim Cash, Jack Epps Jr, Peter Craig</span>
							</p>
							<p className="text-[#333] text-xl">
								Stars <span className="text-[#BE123C]">: Tom Cruise, Jennifer Connelly, Miles Teller</span>
							</p>
						</div>
						<div className="mt-[30px]">
							<div className="w-fit text-xl font-medium text-white rounded-xl px-[20px] py-3  bg-[#BE123C]">Top rated movie #65</div>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-end gap-x-2">
							<img
								className="w-[30px] h-[30px] object-cover"
								src="/assets/star.png"
								alt=""
							/>
							<span className="text-[25px] font-medium text-[#666]">
								<span className="text-[#E8E8E8]">8.5</span> | 350k
							</span>
						</div>
						<button className="w-full mt-6 bg-[#BE123C] rounded-[10px] flex justify-center items-center py-3 gap-x-[10px]">
							<img
								src="/assets/tickets.png"
								alt=""
							/>
							<span className="text-white text-xl font-medium">See Showtimes</span>
						</button>
						<button className="w-full mt-3 bg-[#be123c1a] border border-[#BE123C] rounded-[10px] flex justify-center items-center py-3 gap-x-[10px]">
							<img
								src="/assets/list.png"
								alt=""
							/>
							<span className="text-xl font-medium">More watch options</span>
						</button>
						<div className="mt-8 relative">
							<img
								className="w-full h-full"
								src="/assets/movies.png"
								alt=""
							/>
							<div className="absolute flex bottom-0 w-full pt-3 pb-2 justify-center items-center gap-x-3 backdrop-blur-[2px]">
								<img
									src="/assets/list_white.png"
									alt=""
								/>
								<span className="text-[#E8E8E8] text-sm font-medium">The Best Movies and Shows in September</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default MovieDetails;
