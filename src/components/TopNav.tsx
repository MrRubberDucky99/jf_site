import * as React from "react";
import { FunctionComponent } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Button,
	MenuItem,
} from "@mui/material";
import {} from "../Interface";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

type navProps = {
	pageLabels: string[];
	currentPage: number;
	hiddenPages: boolean[];
};

export const ResponsiveAppBar: FunctionComponent<navProps> = ({
	pageLabels,
	currentPage,
	hiddenPages,
}) => {
	const navigate = useNavigate();
	const newPageLabels = [];
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const linkClick = (address: string) => {
		handleCloseNavMenu();
		navigate("/" + address);
	};

	for (let i = 0; i < pageLabels.length; i++) {
		if (!hiddenPages[i]) {
			newPageLabels.push(pageLabels[i]);
		}
	}

	return (
		<AppBar position="sticky" sx={{ bgcolor: "primary.main" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h4"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						Judah Fuller
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{newPageLabels.map((page) => (
								<MenuItem
									key={page.toLowerCase()}
									onClick={() => linkClick(page.toLowerCase())}
								>
									<Typography textAlign="center" variant="h5">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						Judah Fuller
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						{newPageLabels.map((page) => (
							<Button
								key={page.toLowerCase()}
								onClick={() => linkClick(page.toLowerCase())}
								disableElevation
								sx={{
									my: 2,
									mx: 0.5,
									color: "white",
									display: "block",
									bgcolor: "primary.main",
								}}
								variant="contained"
							>
								<Typography variant="h6">{page}</Typography>
							</Button>
						))}
					</Box>
					<Box sx={{}}>
						<Button
							key={newPageLabels[currentPage].toLowerCase()}
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
							disableRipple
						>
							<Typography variant="h5">{newPageLabels[currentPage]}</Typography>
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
