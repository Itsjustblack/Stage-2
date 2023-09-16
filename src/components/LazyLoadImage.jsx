/* eslint-disable react/prop-types */
import { useState } from "react";

const LazyLoadImage = ({ src, alt, className, testid }) => {
	const [loading, setLoading] = useState(true);

	return (
		<img
			data-testid={testid}
			src={src}
			alt={alt || "an Image"}
			className={`${className} ${loading ? "blur-[4px]" : "blur-none"} transition duration-[1s] ease-linear`}
			onLoad={() => setLoading(false)}
		/>
	);
};

export default LazyLoadImage;
