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
import { navigationPages, pageNavigationInfo, pages } from "../Interface";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//const pages = ["About Me", "Programming", "AVL", "Music"];

type navProps = {
	pages: pageNavigationInfo[];
	currentPage: number;
};

export const ResponsiveAppBar: FunctionComponent<navProps> = ({
	pages,
	currentPage,
}) => {
	const pageLabels = pages;

	const navigate = useNavigate();
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

	return (
		<AppBar position="static" sx={{ bgcolor: "primary.main" }}>
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
							aria-label="account of current user"
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
							{pageLabels.map((page) => (
								<MenuItem
									key={page.address}
									onClick={() => linkClick(page.address)}
								>
									<Typography textAlign="center" variant="h5">
										{page.displayName}
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
						{pageLabels.map((page) => (
							<Button
								key={page.address}
								onClick={() => linkClick(page.address)}
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
								<Typography variant="h6">{page.displayName}</Typography>
							</Button>
						))}
					</Box>
					<Box sx={{}}>
						<Button
							key={pageLabels[currentPage].address}
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: "white", display: "block" }}
							disableRipple
						>
							<Typography variant="h5">
								{pageLabels[currentPage].displayName}
							</Typography>
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
/**
 * sx={{
										color: "palette.info.dark",
									}}
 */
