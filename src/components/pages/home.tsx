import React, { FunctionComponent } from "react";
import { ArrowUpward } from "@mui/icons-material";
import { Typography, Box, Container } from "@mui/material";
import "./home.css";

export const Home: FunctionComponent = () => {
	let page;
	var DateDiff = {
		inDays: function (d1: Date, d2: Date) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return Math.floor((t2 - t1) / (24 * 3600 * 1000 * 365));
		},
	};

	var dString = "August, 12, 2005";

	var d1 = new Date(dString);
	var d2 = new Date();
	page = (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				flexWrap: "wrap",
				minHeight: "80vh",
				justifyContent: "space-between",
				color: "secondary.contrastText",
			}}
		>
			<Container
				sx={{
					transform: "rotate(-10deg)",
					position: "absolute",
					top: "65px",
					left: "-20px",
					padding: "20px",
					display: { xs: "none", sm: "none", md: "block" },
				}}
			>
				<Container
					sx={{
						position: "fixed",
						backgroundColor: "primary.dark",
						width: "300px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: "6%",
					}}
				>
					<img
						src="./img/Profile_Picture.jpg"
						style={{
							margin: "5px",
							width: "115%",
							borderRadius: "6%",
						}}
						alt="Me"
					/>
				</Container>
				<ArrowUpward
					color="primary"
					sx={{
						fontSize: 192,
						position: "fixed",
						top: "-65px",
						left: "80px",
						transform: "rotate(10deg)",
					}}
				/>
			</Container>
			<Container
				sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
			>
				<Typography
					align="left"
					variant="h4"
					sx={{ position: "relative", left: "300px", top: "60px" }}
				>
					This is me.
				</Typography>
				<Typography
					align="left"
					sx={{
						position: "relative",
						left: "350px",
						top: "80px",
						maxWidth: "50vw",
					}}
					variant="body1"
				>
					I'm a {DateDiff.inDays(d1, d2)} year old guy from the south east of
					england. I'm an intermediate guitar player that plays lead guitar in a
					church youth band{" "}
					<a href="https://www.arunchurch.com/come-to-church/youth">
						(Arun Youth)
					</a>
					. <br />I also volunteer with the same church helping with{" "}
					<a href="/AVL"> Sound, Video and Lighting.</a>
					<br />I am a (mostly) self taught programmer, working on small
					projects like a{" "}
					<a href="https://github.com/MrRubberDucky99/Midi-Pi">
						Pico Pi Midi Foot Controller
					</a>
					<br /> Currently, I go to college in brighton, where I am studying
					Music Technology, Maths and computer science.
				</Typography>
			</Container>
			<Container
				sx={{
					transform: "rotate(-10deg)",
					position: "absolute",
					top: "100px",
					left: "20%",
					padding: "10px",
					display: { xs: "block", sm: "block", md: "none" },
				}}
			>
				<Container
					sx={{
						position: "fixed",
						backgroundColor: "primary.dark",
						width: "300px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: "6%",
					}}
				>
					<img
						src="./img/Profile_Picture.jpg"
						style={{
							margin: "5px",
							width: "115%",
							borderRadius: "6%",
						}}
						alt="Me"
					/>
				</Container>
				<ArrowUpward
					color="primary"
					sx={{
						fontSize: 192,
						position: "fixed",
						top: "-65px",
						left: "80px",
						transform: "rotate(10deg)",
					}}
				/>
			</Container>
			<Container sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
				<Typography
					align="center"
					variant="h4"
					sx={{ position: "relative", top: "400px" }}
				>
					This is me.
				</Typography>
				<Typography
					align="left"
					sx={{
						position: "relative",
						top: "500px",
						maxWidth: "80vw",
					}}
					variant="body1"
				>
					I'm a {DateDiff.inDays(d1, d2)} year old guy from the south east of
					england. I'm an intermediate guitar player that plays lead guitar in a
					church youth band{" "}
					<a href="https://www.arunchurch.com/come-to-church/youth">
						(Arun Youth)
					</a>
					. <br />I also volunteer with the same church helping with{" "}
					<a href="/AVL"> Sound, Video and Lighting.</a>
					<br />I am a (mostly) self taught programmer, working on small
					projects like a{" "}
					<a href="https://github.com/MrRubberDucky99/Midi-Pi">
						Pico Pi Midi Foot Controller
					</a>
					<br /> Currently, I go to college in brighton, where I am studying
					Music Technology, Maths and computer science.
				</Typography>
			</Container>
		</Box>
	);
	return page;
};
