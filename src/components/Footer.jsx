const Footer = () => {
	return (
		<div className="flex flex-col w-full justify-center items-center gap-y-[36px] mt-[147px] mb-[74px]">
			<div className="flex gap-x-[48px] justify-center">
				<img
					src="/assets/facebook.svg"
					alt=""
				/>
				<img
					src="/assets/instagram.svg"
					alt=""
				/>
				<img
					src="/assets/twitter.svg"
					alt=""
				/>
				<img
					src="/assets/youtube.svg"
					alt=""
				/>
			</div>
			<div className="flex gap-x-[48px] text-[#111827] text-lg font-bold">
				<p>Conditions of Use</p>
				<p>Privacy & Policy</p>
				<p>Press Room</p>
			</div>
			<div className="text-[#6B7280] text-lg font-bold">© 2021 MovieBox by Adriana Eka Prayudha</div>
		</div>
	);
};

export default Footer;
