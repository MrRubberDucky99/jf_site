import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import CreatePage from "./components/makePage";
//import { useAsync } from "react-async";

const firebaseConfig = {
	apiKey: "AIzaSyD2-zWfHRuAeWfrLviTbD4hdG_wzGyEf24",
	authDomain: "jf-site-77189.firebaseapp.com",
	databaseURL:
		"https://jf-site-77189-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "jf-site-77189",
	storageBucket: "jf-site-77189.appspot.com",
	messagingSenderId: "287898296891",
	appId: "1:287898296891:web:87b942162320dfc9f7321e",
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const dbRef = ref(getDatabase());

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

function RenderSite() {
	const [settings, setSettings] = useState({});
	const pages: Array<String> = [];
	useEffect(() => {
		get(child(dbRef, `Settings/`)).then((snapshot) => {
			const data = snapshot.val();
			setSettings(data);
		});
	});
	const pagesRef = ref(database, `pageRefs`);
	get(pagesRef).then((snapshot) => {
		const data: Array<String> = snapshot.val().split(",");
		for (let i = 0; i < data.length; i++) {
			if (!pages.includes(data[i])) {
				console.log(data[i]);
				pages.push(data[i]);
			}
		}
	});
	return (
		<ThemeProvider theme={theme}>
			<CreatePage settings={settings} pages={pages} />
		</ThemeProvider>
	);
}
ReactDOM.render(
	<React.StrictMode>
		<RenderSite />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
