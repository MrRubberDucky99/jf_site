import React from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./TopNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

interface dataFace {
	pages: any;
	root: string;
}

function getPageData(settings: any, pages: any) {
	const data = {
		pages,
		root: pages.root,
	};
	for (let i = 0; i < pages.numPages; i++) {}
	return data as dataFace;
}

function createPage(settings: any, pages: any) {
	const data = getPageData(settings, pages);
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
					<Route index element={<App page={data.pages} />} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
}
export default createPage;
