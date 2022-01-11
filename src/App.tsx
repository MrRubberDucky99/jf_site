import React from "react";
import "./App.css";
import ConstructionIcon from "@mui/icons-material/Construction";
// background-color: #282c34;

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ConstructionIcon color="primary" sx={{ fontSize: 128 }} />
				<p>
					I need to edit <code>src/App.tsx</code> and get my website working.
					BRB!
				</p>
			</header>
		</div>
	);
}

export default App;
