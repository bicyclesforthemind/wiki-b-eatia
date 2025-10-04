import React, { useEffect, useState, useLayoutEffect } from 'react';
import {Text, useApp, useInput, useStdout} from 'ink';
import { TitleScreen } from './titleScreen.js';
import { Loading } from './loading.js';
import { Game } from "./game.js";

const ENTER_FULL_SCREEN_STR = "\x1b[?1049h";
const EXIT_FULL_SCREEN_STR = "\x1b[?1049l";

const APP_LIFECYCLE = {
	APP_LOADING: "APP_LOADING",
	APP_STARTED: "APP_STARTED",
	GAME_STARTED: "GAME_STARTED",
	GAME_ENDED: "GAME_ENDED",
}

const App = () => {

	const [hasAppStarted, setHasAppStarted] = useState(false);

	const [appLifecycle, setAppLifecycle] = useState(APP_LIFECYCLE.APP_LOADING);

	const { exit } = useApp();
	const { stdout } = useStdout();

	const handleUserInput = (input, key) => {
		if (key.escape) {
			stdout.write(EXIT_FULL_SCREEN_STR);
			exit();
		}
	};

	useInput(handleUserInput);

	useLayoutEffect(() => {
		stdout.write(ENTER_FULL_SCREEN_STR);
		
		const timer = setTimeout(() => {
			setAppLifecycle(APP_LIFECYCLE.APP_STARTED);
		}, 300);

		return () => clearTimeout(timer);
		
	}, []);
	

	switch (appLifecycle) {
		case APP_LIFECYCLE.APP_LOADING:
			return <Loading />;
		case APP_LIFECYCLE.APP_STARTED:
			return <TitleScreen handleModeSelected={() => setAppLifecycle(APP_LIFECYCLE.GAME_STARTED)} />;
		case APP_LIFECYCLE.GAME_STARTED:
			return <Game />
		default:
			return null;
	}

} 

export default App;