import React from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

interface dataFace {
	pages: any;
	root: string;
}

function createPage(settings: any, pages: any) {
	return (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<ResponsiveAppBar />
			<BrowserRouter>
				<Routes>
					<Route index element={<App page={pages.pages[settings.root]} />} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
}
export default createPage;
