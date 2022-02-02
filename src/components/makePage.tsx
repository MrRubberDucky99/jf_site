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
	const pageRoutes = [];
	let rootAddr = 0;
	for (let i = 0; i < pageLbls1.length; i++) {
		if (pageLbls1[i].address.toLowerCase() === settings.root.toLowerCase()) {
			rootAddr = i;
			pageLbls1[i].address = "";
		}
		if (pageLbls1[i].hidden) {
			pageLbls1[i].priority = 69420;
		}
		pageRoutes.push({
			path: "/" + pageLbls1[i].address,
			element: <App pageNav={pages.navigation[i]} pageData={pages.data[i]} />,
		});
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
	return (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "secondary.contrastText",
			}}
		>
			<BrowserRouter>
				<ResponsiveAppBar pages={pageLabels} currentPage={0} />
				<Routes>
					<Route
						index
						element={
							<App
								pageNav={pages.navigation[rootAddr]}
								pageData={pages.data[rootAddr]}
							/>
						}
					/>
					{pageRoutes.map((pageRoute) => (
						<Route path={pageRoute.path} element={pageRoute.element} />
					))}
				</Routes>
			</BrowserRouter>
		</Box>
	);
};

/**
 *
 */
