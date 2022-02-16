import React, { FunctionComponent } from "react";
import { ArrowUpward } from "@mui/icons-material";
import { Typography, Box, Container } from "@mui/material";
import { borderRadius } from "@mui/system";

export const Home: FunctionComponent = () => {
	let page = (
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
			<Container
				sx={{
					transform: "rotate(-10deg)",
					position: "fixed",
					top: "65px",
					left: "-20px",
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
		</Box>
	);
	return page;
};
