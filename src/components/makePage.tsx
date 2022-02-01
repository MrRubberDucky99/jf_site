import React from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./TopNav";
import { pageRefs } from "../Interface";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

function createPage(settings: any, pages: Array<string>) {
	return (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<ResponsiveAppBar {...pages} />
		</Box>
	);
}
export default createPage;

/**
 * <BrowserRouter>
				<Routes>
					<Route index element={<App page={pages.pages[settings.root]} />} />
				</Routes>
			</BrowserRouter>
 */
