import React, { FunctionComponent } from "react";
import { Canvas, game } from "../breakout/gameLogic";
import { Box, Button } from "@mui/material";

export const Game: FunctionComponent = () => {
	return (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				justifyContent: "space-between",
				color: "secondary.contrastText",
			}}
		>
			<Button onClick={game}>Play Breakout</Button>
			<Canvas />
		</Box>
	);
};
