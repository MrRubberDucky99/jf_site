import React from "react";
import "./App.css";
//import ConstructionIcon from "@mui/icons-material/Construction";
import { Construction } from "@mui/icons-material";
// background-color: #282c34;

interface element {}

function App(pageElements: element) {
	let page = (
		<div className="App">
			<header className="App-header">
				<Construction color="primary" sx={{ fontSize: 128 }} />
				<p>
					I need to edit <code>src/App.tsx</code> and get my website working.
					BRB!
				</p>
			</header>
		</div>
	);
	return page;
}

export default App;
/**
 * 
 * 
				justifyContent: "left",
				alignItems: "left",
 * 
 * Building Page
 * 
 */
