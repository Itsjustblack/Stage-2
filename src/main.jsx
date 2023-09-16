import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./index.css";
import App from "./app";

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onerror: (error) => toast.error(error?.message),
	}),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
