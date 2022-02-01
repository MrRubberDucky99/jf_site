import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { CreatePage } from "./components/makePage";
import { settings, pages } from "./Interface";

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
let connected = false;
const connectedRef = ref(database, ".info/connected");
onValue(connectedRef, (snap) => {
	if (snap.val() === true) {
		console.log("connected");
		connected = true;
	} else {
		console.log("not connected");
		connected = false;
	}
});
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
	},
});

let wait: boolean = true;
function RenderSite() {
	const [pages, setPages] = useState<pages>({
		data: {
			"Loading": { longTitle: "Loading" },
		},
		navigation: {
			"loading": {
				address: "loading",
				displayName: "Loading",
				hidden: false,
				priority: 999,
			},
		},
	});
	const [newPages, setNewPages] = useState("");
	const pagesRef = ref(database, `pages`);
	onValue(pagesRef, (snapshot) => {
		if (snapshot.exists()) {
			const data = snapshot.val();
			if (data.toString() !== newPages) {
				pages.navigation = data.navigation;
				pages.data = data.data;
				setNewPages(data.toString());
			}
		}
	});
	const [settings, setSettings] = useState<settings>({ root: "" });
	const [newSettings, setNewSettings] = useState("");
	const settingsRef = ref(database, `Settings`);
	onValue(settingsRef, (snapshot) => {
		if (snapshot.exists()) {
			const data = snapshot.val();
			if (data.toString() !== newSettings) {
				setSettings(data);
				//console.log(settings.root);
				setNewSettings(data.toString());
			}
		}
	});
	console.log(pages);
	console.log(settings);
	return <CreatePage settings={settings} pages={pages} />;
}

//while (wait) {}
ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RenderSite />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
