import React, { FunctionComponent } from "react";
import { game } from "./gameLogic";

export const GameLoader: FunctionComponent = () => {
	game();
	return <div />;
};
