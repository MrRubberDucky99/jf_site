import React, { FunctionComponent } from "react";
import { pageNavigationInfo, page } from "../Interface";
import { Box } from "@mui/material";
import { Construction } from "@mui/icons-material";
type appProps = {
	pageNav: pageNavigationInfo;
	pageData: page;
};

const App: FunctionComponent<appProps> = (pageNav, pageData) => {
	let page = (
		<Box
			sx={{
				backgroundColor: "secondary.dark",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-evenly",
				color: "secondary.contrastText",
			}}
		>
			<Construction color="primary" sx={{ fontSize: 128 }} />
			<p>
				I need to edit <code>src/App.tsx</code> and get my website working. BRB!
			</p>
		</Box>
	);
	return page;
};

export default App;
/**
 * 
 * 
				justifyContent: "left",
				alignItems: "left",
 * 
 * Building Page
 * 
 */
