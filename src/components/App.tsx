import React, {
	FunctionComponent,
	useState,
	useEffect,
	useCallback,
} from "react";
import { Game, Canvas } from "./breakout/gameLogic";
import { parentData } from "../Interface";
import { Construction } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";

export const Site: FunctionComponent = () => {
	let page = (
		<div>
			<ConstructionPage />
		</div>
	);
	return page;
};

export function ConstructionPage() {
	return (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: "93vh",
				justifyContent: "space-evenly",
				color: "secondary.contrastText",
			}}
		>
			<Construction color="primary" sx={{ fontSize: 192 }} />
			<Typography variant="body2" align="center">
				I need to edit <code>src/App.tsx</code> and get my website working. Play
				Breakout Whilst you wait!
			</Typography>
			<Canvas />
		</Box>
	);
}
