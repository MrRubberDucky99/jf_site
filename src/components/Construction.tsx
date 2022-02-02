import React from "react";
import { Construction } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";

export function ConstructionPage() {
	return (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "92vh",
				justifyContent: "space-evenly",
				color: "secondary.contrastText",
			}}
		>
			<Construction color="primary" sx={{ fontSize: 192 }} />
			<Typography variant="body2" align="center">
				I need to edit <code>src/App.tsx</code> and get my website working. BRB!
			</Typography>
		</Box>
	);
}

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
