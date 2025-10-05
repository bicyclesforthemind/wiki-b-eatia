import React, { useState, useLayoutEffect, useCallback } from 'react';
import { useApp, useInput, useStdout} from 'ink';
import { TitleScreen } from './components/titleScreen.js';
import { Loading } from './components/loading.js';
import { GameStart } from "./components/gameStart.js";
import { GameOver } from './components/gameOver.js';

import { ENTER_FULL_SCREEN_STR, EXIT_FULL_SCREEN_STR, INITIAL_GAME_SCORE, GAME_CLOCK_DURATION } from "./consts.js";

const APP_LIFECYCLE = {
	APP_LOADING: "APP_LOADING",
	APP_STARTED: "APP_STARTED",
	GAME_STARTED: "GAME_STARTED",
	GAME_OVER: "GAME_OVER",
}

const App = () => {

	const [appLifecycle, setAppLifecycle] = useState(APP_LIFECYCLE.APP_LOADING);

	const [gameScore, setGameScore] = useState(INITIAL_GAME_SCORE);
	const [timeLeft, setTimeLeft] = useState(GAME_CLOCK_DURATION);

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
	}, []);

	const resetGame = () => {
		setGameScore(INITIAL_GAME_SCORE); 
		setTimeLeft(GAME_CLOCK_DURATION);
	};
	

	switch (appLifecycle) {
		case APP_LIFECYCLE.APP_LOADING:
			return <Loading handleLoadingFinished={() => setAppLifecycle(APP_LIFECYCLE.APP_STARTED)} />;
		case APP_LIFECYCLE.APP_STARTED:
			return <TitleScreen handleModeSelected={() => {stdout.write(ENTER_FULL_SCREEN_STR); setAppLifecycle(APP_LIFECYCLE.GAME_STARTED)}} />;
		case APP_LIFECYCLE.GAME_STARTED:
			return <GameStart 
				score={gameScore} 
				timeLeft={timeLeft} 
				handleScoreChange={() => setGameScore(score + 1)} 
				handleTimeChange={() => setTimeLeft(timeLeft - 1)} 
				handleGameOver={() => setAppLifecycle(APP_LIFECYCLE.GAME_OVER)} />
		case APP_LIFECYCLE.GAME_OVER:
			return <GameOver handleResetGameOver={() => {setAppLifecycle(APP_LIFECYCLE.APP_LOADING); resetGame();}} />
		default:
			return null;
	}

} 

export default App;