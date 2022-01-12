import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ResponsiveAppBar from "./components/TopNav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { initializeApp } from "firebase/app";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD2-zWfHRuAeWfrLviTbD4hdG_wzGyEf24",
	authDomain: "jf-site-77189.firebaseapp.com",
	projectId: "jf-site-77189",
	storageBucket: "jf-site-77189.appspot.com",
	messagingSenderId: "287898296891",
	appId: "1:287898296891:web:87b942162320dfc9f7321e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#1565c0",
			light: "#5e92f3",
			dark: "#003c8f",
		},
		secondary: {
			main: "#4a148c",
			light: "#7c43bd",
			dark: "#12005e",
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
	},
});

async function getPages() {
	const Snap = await getDocs(collection(db, "pages"));
	let pages: any[] = [];
	Snap.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, " => ", doc.data());
		pages.push(doc.data());
	});
	return pages;
}
console.log(getPages());
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Box sx={{ backgroundColor: "secondary.dark" }}>
				<ResponsiveAppBar />
				<App />
			</Box>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
