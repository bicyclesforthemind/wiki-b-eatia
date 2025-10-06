import React, { useState, useLayoutEffect, useCallback } from 'react';
import { useApp, useInput, useStdout} from 'ink';
import { TitleScreen } from './components/titleScreen.js';
import { Loading } from './components/loading.js';
import { GameStart } from "./components/gameStart.js";
import { GameOver } from './components/gameOver.js';

import { exec } from "node:child_process";
import { readdir } from "node:fs/promises";

import path from "node:path";
import { cwd } from "node:process";

import { ENTER_FULL_SCREEN_STR, EXIT_FULL_SCREEN_STR, INITIAL_GAME_SCORE, GAME_CLOCK_DURATION, SOUND_FILE_NAME } from "./consts.js";

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

	const [runningProcess, setRunningProcess] = useState();

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

	const handleStartAudio = () => {

		const playAudioFile = async () => {
			const filePath = path.join(cwd(), "sounds");
			
			const files = await readdir(filePath);

			if (files && files.length > 0) {
				const playerProcess = exec(`afplay -t ${GAME_CLOCK_DURATION} "${path.join(filePath, SOUND_FILE_NAME)}"`);
				setRunningProcess(playerProcess);
			}
		};

		playAudioFile();
	};

	const resetGame = useCallback(() => {
		setGameScore(INITIAL_GAME_SCORE); 
		setTimeLeft(GAME_CLOCK_DURATION);

		if (runningProcess) {
			runningProcess.kill();
		}
	}, [setGameScore, setTimeLeft, runningProcess]);
	

	const handleScoreChange = (points) => setGameScore(gameScore + points);

	switch (appLifecycle) {
		case APP_LIFECYCLE.APP_LOADING:
			return <Loading handleLoadingFinished={() => setAppLifecycle(APP_LIFECYCLE.APP_STARTED)} />;
		case APP_LIFECYCLE.APP_STARTED:
			return <TitleScreen handleModeSelected={() => {stdout.write(ENTER_FULL_SCREEN_STR); setAppLifecycle(APP_LIFECYCLE.GAME_STARTED)}} />;
		case APP_LIFECYCLE.GAME_STARTED:
			return <GameStart 
				score={gameScore} 
				timeLeft={timeLeft} 
				handleStartAudio={handleStartAudio}
				handleScoreChange={handleScoreChange} 
				handleTimeChange={() => setTimeLeft(timeLeft - 1)} 
				handleGameOver={() => setAppLifecycle(APP_LIFECYCLE.GAME_OVER)} />
		case APP_LIFECYCLE.GAME_OVER:
			return <GameOver handleResetGameOver={() => {setAppLifecycle(APP_LIFECYCLE.APP_LOADING); resetGame();}} />
		default:
			return null;
	}

} 

export default App;