import NavItem from "./NavItem";

const Nav = () => {
	return (
		<nav className="relative w-full h-screen overflow-hidden flex flex-col justify-between items-center pt-[52px] border border-[#0000004d] rounded-[0px_45px_45px_0px]">
			<div className="flex items-center gap-x-6 mx-5">
				<img
					className="w-[50px] h-[50px] object-cover"
					src="/src/assets/logo.png"
					alt=""
				/>
				<span className="font-bold text-2xl text-[#333]">MovieBox</span>
			</div>
			<div className="w-full flex flex-col gap-y-2">
				<NavItem
					title="Home"
					icon="home"
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

export default Nav;
