import React, { useState } from "react";
import { Canvas, game } from "../breakout/gameLogic";
import { Box, Button, Typography, Container, Input } from "@mui/material";
import { getLeaderboard } from "../../functions/firebase";
import { leaderBoard, gameInfo } from "../breakout/interface";

export function Game(db: any) {
	const [leaderboard, setLeaderboard] = useState<leaderBoard[]>([]);
	const [name, setName] = useState<string>("");
	const [gameInfo, setGameInfo] = useState<gameInfo>({
		state: "READY",
		score: 0,
	});
	if (leaderboard.length === 0) {
		getLeaderboard(setLeaderboard);
	}

	function changeName(name: any) {
		let newName = name.toString();
		setName(newName);
	}

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
				value={name}
				onChange={(val) => changeName(val.target.value)}
			/>
			<Button onClick={() => game(setGameInfo, name, gameInfo, changeName)}>
				Play Breakout
			</Button>
			<Canvas />
			<Typography textAlign="center">Leaderboard:</Typography>
			{leaderboard.map((player) => (
				<Container sx={{ maxWidth: "50vw" }}>
					<Typography textAlign="left">{player.name}</Typography>
					<Typography textAlign="right">{player.score}</Typography>
				</Container>
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
