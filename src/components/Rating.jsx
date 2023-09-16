// eslint-disable-next-line react/prop-types
const Rating = ({ votes }) => {
	return (
		<div className="flex justify-between items-center w-full">
			<div>
				<img
					className="w-[35px] h-[17px] object-contain inline-block mr-[10px]"
					src="/assets/imdb.png"
					alt=""
				/>
				<span className="text-[12px]">{`${votes * 10} / 100`}</span>
			</div>
			<div>
				<img
					className="inline-block mr-[10px]"
					src="/assets/tomato.png"
					alt=""
				/>
				<span className="text-[12px]">{votes * 10}%</span>
			</div>
		</div>
	);
};

export default Rating;
