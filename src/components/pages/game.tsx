import React, { useState } from "react";
import { Canvas, game } from "../breakout/gameLogic";
import { Box, Button, Typography, Container, Input } from "@mui/material";
import { getLeaderboard } from "../../functions/firebase";
import { leaderBoard, gameInfo } from "../breakout/interface";

export function Game(db: any) {
	const [leaderboard, setLeaderboard] = useState<leaderBoard[]>([]);
	const [gameInfo, setGameInfo] = useState<gameInfo>({
		state: "READY",
		score: 0,
	});
	if (leaderboard.length === 0 || gameInfo.state === "OVER") {
		getLeaderboard(setLeaderboard);
	}
	let inputRef: any;
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
			<Input
				placeholder="Enter Your Name"
				sx={{ color: "secondary.contrastText" }}
				inputRef={(ref) => {
					inputRef = ref;
				}}
			/>
			<Button onClick={() => game(setGameInfo, inputRef, gameInfo)}>
				Play Breakout
			</Button>
			<Canvas />
			<Typography textAlign="center">Leaderboard:</Typography>
			{leaderboard.map((player) => (
				<Typography textAlign="center">{player.name}</Typography>
			))}
			<Container
				sx={{
					display: "flex",
					flexDirection: "row",
				}}
			></Container>
		</Box>
	);
}
