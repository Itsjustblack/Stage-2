import MovieCard from "./components/MovieCard";
import { useState } from "react";
import Rating from "./components/Rating";
import Footer from "./components/Footer";

function App() {
	const [movies] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	return (
		<>
			<header className="relative w-full h-[600px]">
				<img
					className="w-full h-full object-cover absolute z-0"
					src="/src/assets/poster.png"
					alt=""
				/>
				<div className="relative px-[95px] py-4 z-10">
					<nav className="bg-transparent flex justify-between text-white">
						<div className="flex items-center gap-x-6">
							<img
								className="w-[50px] h-[50px] object-cover"
								src="/src/assets/logo.png"
								alt=""
							/>
							<span className="font-bold text-2xl">MovieBox</span>
						</div>
						<div className="flex items-center rounded-md border-2 w-[505px] px-3 py-[6px]">
							<input
								type="text"
								placeholder="What do you want to watch?"
								className="outline-0 bg-transparent w-full placeholder:text-white"
							/>
							<img
								className="w-4 h-4"
								src="/src/assets/search.svg"
								alt=""
							/>
						</div>
						<div className="flex items-center gap-x-7">
							<span className="font-bold">Sign in</span>
							<img
								className="w-9 h-9"
								src="/src/assets/menu.svg"
								alt=""
							/>
						</div>
					</nav>
					<div className="flex flex-col gap-y-4 pt-[78px] text-white w-[404px]">
						<h1 className="font-bold text-[48px] leading-[56px]">John Wick 3 : Parabellum</h1>
						<div className="w-[184px]">
							<Rating />
						</div>
						<p className="font-medium leading-[20px] max-w-[302px]">{`John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.`}</p>
						<div className="outline-0 w-fit flex items-center rounded-md gap-x-2 px-4 py-2 bg-[#BE123C]">
							<img
								src="/src/assets/play.svg"
								alt=""
							/>
							<span className="font-bold text-sm">WATCH TRAILER</span>
						</div>
					</div>
				</div>
			</header>
			<section className="mt-[70px] px-[95px]">
				<div className="flex items-center justify-between">
					<span className="font-bold text-4xl">Featured Movie</span>
					<div className="flex items-center">
						<span className="text-lg text-[#BE123C]">See more</span>
						<img
							src="/src/assets/chevron-right.svg"
							alt=""
						/>
					</div>
				</div>
				<div className="mt-[44px] grid grid-cols-4 gap-x-[80px] gap-y-[103px]">
					{movies.map((id) => (
						<MovieCard key={id} />
					))}
				</div>
			</section>
			<Footer />
		</>
	);
}

export default App;
