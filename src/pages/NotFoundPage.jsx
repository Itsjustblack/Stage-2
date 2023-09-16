const NotFoundPage = () => {
	return (
		<div className="w-full h-full my-[200px] flex flex-col justify-center items-center text-center">
			<h1 className="text-[#333] text-[4.5rem]">404</h1>
			<h2 className="text-[2.2rem] text-[#777] mb-[1.8rem]">Page Not Found</h2>
			<p className="text-base text-[#777] mb-[1.8rem]">The page you're looking for could not be found.</p>
			<a
				className="text-balck no-underline hover:underline"
				href="/"
			>
				Go to home page
			</a>
		</div>
	);
};

export default NotFoundPage;
