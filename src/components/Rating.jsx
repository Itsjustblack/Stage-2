const Rating = () => {
	return (
		<div className="flex justify-between items-center w-full">
			<div>
				<img
					className="w-[35px] h-[17px] object-contain inline-block mr-[10px]"
					src="/src/assets/imdb.png"
					alt=""
				/>
				<span className="text-[12px]">86.0 / 100</span>
			</div>
			<div>
				<img
					className="inline-block mr-[10px]"
					src="/src/assets/tomato.png"
					alt=""
				/>
				<span className="text-[12px]">97%</span>
			</div>
		</div>
	);
};

export default Rating;
