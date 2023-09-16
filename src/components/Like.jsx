/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";

const Like = ({ title = "" }) => {
	const [liked, setLiked] = useState(false);
	return (
		<div
			onClick={() => {
				setLiked((prev) => !prev);
				toast.success(`Added ${title} to Favorites`);
			}}
			className="relative cursor-pointer"
		>
			{!liked && (
				<svg
					width="40"
					height="40"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_b_1_2824)">
						<ellipse
							cx="15"
							cy="15.1842"
							rx="15"
							ry="14.6053"
							fill="#F3F4F6"
							fillOpacity="0.5"
						/>
					</g>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.17157 10.4828C9.73367 8.96185 12.2663 8.96185 13.8284 10.4828L15 11.6236L16.1716 10.4828C17.7337 8.96185 20.2663 8.96185 21.8284 10.4828C23.3905 12.0038 23.3905 14.4698 21.8284 15.9908L15 22.6396L8.17157 15.9908C6.60948 14.4698 6.60948 12.0038 8.17157 10.4828Z"
						fill="#D1D5DB"
					/>
					<defs>
						<filter
							id="filter0_b_1_2824"
							x="-2"
							y="-1.42105"
							width="34"
							height="33.2105"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity="0"
								result="BackgroundImageFix"
							/>
							<feGaussianBlur
								in="BackgroundImageFix"
								stdDeviation="1"
							/>
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_1_2824"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_backgroundBlur_1_2824"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			)}
			{liked && (
				<svg
					width="40"
					height="40"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_b_1_2824)">
						<ellipse
							cx="15"
							cy="15.1842"
							rx="15"
							ry="14.6053"
							fill="#F3F4F6"
							fillOpacity="0.5"
						/>
					</g>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8.17157 10.4828C9.73367 8.96185 12.2663 8.96185 13.8284 10.4828L15 11.6236L16.1716 10.4828C17.7337 8.96185 20.2663 8.96185 21.8284 10.4828C23.3905 12.0038 23.3905 14.4698 21.8284 15.9908L15 22.6396L8.17157 15.9908C6.60948 14.4698 6.60948 12.0038 8.17157 10.4828Z"
						fill="#A12E2E"
					/>
					<defs>
						<filter
							id="filter0_b_1_2824"
							x="-2"
							y="-1.42105"
							width="34"
							height="33.2105"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood
								floodOpacity="0"
								result="BackgroundImageFix"
							/>
							<feGaussianBlur
								in="BackgroundImageFix"
								stdDeviation="1"
							/>
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_1_2824"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_backgroundBlur_1_2824"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			)}
		</div>
	);
};

export default Like;

// initial={{ opacity: 0, scale: 0.85 }}
// animate={{ scale: 1, opacity: 1 }}
// whileHover={{ scale: 1.15 }}
// whileTap={{ scale: 0.85 }}
