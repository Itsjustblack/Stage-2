/* eslint-disable react/prop-types */
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

export const Nav = ({ query, setQuery }) => {
	return (
		<nav className="bg-transparent flex justify-between text-white">
			<div className="flex items-center gap-x-6">
				<img
					className="w-7 h-7 lg:w-[50px] lg:h-[50px] object-cover"
					src="/assets/logo.png"
					alt=""
				/>
				<span className="font-bold text-xl lg:text-2xl">MovieBox</span>
			</div>
			<SearchBar
				query={query}
				setQuery={setQuery}
			/>
			<div className="flex items-center gap-x-7">
				<span className="text-sm lg:text-base font-bold">Sign in</span>
				<img
					className="w-5 h-5 lg:w-9 lg:h-9"
					src="/assets/menu.svg"
					alt=""
				/>
			</div>
		</nav>
	);
};

export const ClientNav = () => {
	return (
		<nav className="relative w-full h-screen overflow-hidden hidden lg:flex flex-col justify-between items-center pt-[52px] border border-[#0000004d] rounded-[0px_45px_45px_0px]">
			<div className="flex items-center gap-x-6 mx-5">
				<img
					className="w-[50px] h-[50px] object-cover"
					src="/assets/logo.png"
					alt=""
				/>
				<span className="font-bold text-2xl text-[#333]">MovieBox</span>
			</div>
			<div className="w-full flex flex-col gap-y-2">
				<NavItem
					title="Home"
					icon="home"
					path="/"
				/>
				<NavItem
					title="Movies"
					icon="movie"
				/>
				<NavItem
					title="TV Series"
					icon="tv"
				/>
				<NavItem
					title="Upcoming"
					icon="calendar"
				/>
			</div>
			<div>
				<div className="bg-[#f8e7eb66] border border-[#be123cb3] rounded-[20px] pt-[42px] pb-[14px] px-4 text-left font-poppins mx-7">
					<p className="text-[#333333cc] text-[15px] font-semibold">Play movie quizes and earn free tickets</p>
					<p className="text-[#666] text-xs font-medium mt-2">50k people are playing now</p>
					<div className="text-[#BE123C] text-xs bg-[#be123c33] py-[6px] px-4 rounded-[30px] mt-[14px] font-medium text-center">Start playing</div>
				</div>
				<NavItem
					title="Log Out"
					icon="logout"
				/>
			</div>
		</nav>
	);
};
