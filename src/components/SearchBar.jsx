/* eslint-disable react/prop-types */

const SearchBar = ({ query, setQuery }) => {
	return (
		<div className="flex items-center rounded-md border-2 w-[50%] lg:w-full max-w-[505px] px-3 py-[6px]">
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type="text"
				aria-label="Search"
				aria-describedby="search-addon"
				placeholder="What do you want to watch?"
				className="outline-0 bg-transparent w-full placeholder:text-white"
			/>
			<img
				className="w-4 h-4"
				src="/assets/search.svg"
				alt=""
			/>
		</div>
	);
};

export default SearchBar;
