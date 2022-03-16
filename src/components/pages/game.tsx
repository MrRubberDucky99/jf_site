import React, { useState } from "react";
import { Canvas, game } from "../breakout/gameLogic";
import { Box, Button, Typography } from "@mui/material";
import { getLeaderboard } from "../../functions/firebase";
import { leaderBoard } from "../breakout/interface";

export function Game(db: any) {
	const [leaderboard, setLeaderboard] = useState<leaderBoard[]>([]);
	getLeaderboard(setLeaderboard);
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
			<Typography textAlign="center">Leaderboard:</Typography>
			{leaderboard.map((player) => (
				<Typography textAlign="center">{player.name}</Typography>
			))}
			<Button onClick={() => game(getLeaderboard, setLeaderboard)}>
				Play Breakout
			</Button>
			<Canvas />
		</Box>
	);
}
