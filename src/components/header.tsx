import React from "react";
import "./App.css";
//import ConstructionIcon from "@mui/icons-material/Construction";
import { Box, Typography } from "@mui/material";
import test from "./test.jpeg";
// background-color: #282c34;

function App(header: string) {
	return (
		<Typography color="white" variant="h1" sx={{ textAlign: "center" }}>
			{{ header }}
		</Typography>
	);
}

export default App;
/**
 * 
 * 
				justifyContent: "left",
				alignItems: "left",
 * 
 * Building Page
 * <div className="App">
			<header className="App-header">
				<ConstructionIcon color="primary" sx={{ fontSize: 128 }} />
				<p>
					I need to edit <code>src/App.tsx</code> and get my website working.
					BRB!
				</p>
			</header>
		</div>
 */
