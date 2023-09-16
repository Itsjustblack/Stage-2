/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const NavItem = ({ title, icon, path = "" }) => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(path)}
			className="relative w-full flex items-center pl-[42px] gap-x-4 h-[86px] focus:bg-[#be123c1a] before:absolute before:right-0 before:top-0 before:w-[6px] before:h-full before:focus:bg-[#be123c] before:drop-shadow-[0px_2px_4px_#00000040]"
		>
			<img
				className="w-7 h-7 object-cover shadow-[0px_1px_2px_0px_00000033]"
				src={`/assets/${icon}.png`}
				alt=""
			/>
			<span className="text-xl text-[#666] font-semibold font-poppins">{title}</span>
		</button>
	);
};

export default NavItem;
