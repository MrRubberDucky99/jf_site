import React from "react";
import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./TopNav";
import { settings, pages } from "../Interface";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

type pageProps = {
	pages: pages;
	settings: settings;
};

export const CreatePage: FunctionComponent<pageProps> = ({
	settings,
	pages,
}) => {
	const pageLbls1 = Object.values(pages.navigation);
	let rootAddr = 0;
	for (let i = 0; i < pageLbls1.length; i++) {
		if (pageLbls1[i].hidden) {
			pageLbls1[i].priority = 69420;
		}
	}
	const pageLabels = pageLbls1.sort((n1, n2) => {
		if (n1.priority > n2.priority) {
			return 1;
		}
		if (n1.priority < n2.priority) {
			return -1;
		}
		return 0;
	});
	for (let i = 0; i < pageLabels.length; i++) {
		if (pageLabels[i].hidden) {
			pageLabels.pop();
		}
	}
	for (let i = 0; i < pageLbls1.length; i++) {
		if (pageLbls1[i].address === settings.root) {
			rootAddr = i;
		}
	}
	return (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				color: "secondary.contrastText",
			}}
		>
			<ResponsiveAppBar pages={pageLabels} currentPage={0} />
			<BrowserRouter>
				<Routes>
					<Route index element={<App page={pages.navigation[rootAddr]} />} />
					<Route path="/home" element={<h1>Boo!</h1>} />
				</Routes>
			</BrowserRouter>
		</Box>
	);
};

/**
 *
 */
