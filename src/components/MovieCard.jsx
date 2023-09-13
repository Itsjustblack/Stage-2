import Rating from "./Rating";

const MovieCard = () => {
	return (
		<div className="relative w-[250px] h-[490px] flex flex-col gap-y-3">
			<div className="absolute w-full flex items-center justify-between px-4 mt-4">
				<div className="text-[#111827] font-bold text-[12px] px-2 rounded-xl bg-[#f3f4f680]">TV Series</div>
				<img
					src="/src/assets/favorite.svg"
					alt=""
				/>
			</div>
			<img
				className="w-full h-full object-cover"
				src="/src/assets/miniPoster.png"
				alt=""
			/>
			<p className="text-[12px] text-[#9CA3AF] font-bold">USA, 2016 - Current</p>
			<span className="text-[18px] text-[#111827] font-bold">Stranger Things</span>
			<Rating />
			<p className="text-[12px] text-[#9CA3AF] font-bold">Action, Adventure, Horror</p>
		</div>
	);
};

export default MovieCard;
