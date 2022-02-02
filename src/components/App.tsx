import React, { FunctionComponent } from "react";
import { pageNavigationInfo, page } from "../Interface";
import { ConstructionPage } from "./Construction";
type appProps = {
	pageNav: pageNavigationInfo;
	pageData: page;
};

const App: FunctionComponent<appProps> = (pageNav, pageData) => {
	let page = <ConstructionPage />;
	return page;
};

export default App;
