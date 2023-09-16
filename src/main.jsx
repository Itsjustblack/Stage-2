import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import router from "./routes.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onerror: (error) => toast.error(error?.message),
	}),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
