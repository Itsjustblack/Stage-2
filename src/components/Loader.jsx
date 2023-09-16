import { Triangle } from "react-loader-spinner";

const Loader = () => {
	return (
		<div className="flex w-full justify-center items-center my-20">
			<Triangle
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</div>
	);
};

export default Loader;
