import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pages } from "./Interface";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/TopNav";
import { Site } from "./components/App";
import { Canvas, Game } from "./components/breakout/gameLogic";
import { Home } from "./components/pages/home";
import { Box } from "@mui/material";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#1565c0",
			light: "#306EFF",
			dark: "#003c8f",
			contrastText: "#fff",
		},
		secondary: {
			main: "#4a148c",
			light: "#7c43bd",
			dark: "#12005e",
			contrastText: "#fff",
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "dashed" },
					style: {
						textTransform: "none",
						border: `2px dashed`,
					},
				},
				{
					props: { variant: "dashed", color: "secondary" },
					style: {
						border: `4px dashed`,
					},
				},
			],
		},
	},
	typography: {
		fontFamily: [
			"Ubuntu Mono",
			"Roboto Mono",
			"Roboto",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		h6: {
			fontSize: "1.2rem",
		},
		body2: {
			fontSize: "2rem",
		},
	},
});

const Pages: pages = {
	labels: ["Home"],
	pageNum: [0],
	element: [<Home />],
};

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Box
					sx={{
						backgroundColor: "secondary.dark",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-evenly",
						color: "secondary.contrastText",
					}}
				>
					<ResponsiveAppBar pageLabels={Pages.labels} currentPage={0} />
					<Routes>
						<Route index element={Pages.element[0]} />
						{Pages.pageNum.map((num) => (
							<Route
								path={Pages.labels[num].toLowerCase()}
								element={Pages.element[num]}
							/>
						))}
					</Routes>
					<Canvas />
				</Box>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
Game();
// pageNav={pageLbls1[rootAddr]}
// pageData={pageData1[rootAddr]}
/**
 *
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
