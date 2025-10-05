import React, { useEffect } from "react";
import { useState } from "react";
import { Box } from "ink";

import { Stomach } from "./stomach.js";
import { Time } from "./time.js";
import { Monster } from "./monster.js";
import { Score } from "./score.js";

import { LinkBox } from "./linkBox.js";

import { GAME_CLOCK_TICK_DURATION } from "../consts.js";

import { Player } from 'cli-sound';


export const GameStart = ({ score, timeLeft, handleScoreChange, handleTimeChange,  handleGameOver }) => {

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        handleTimeChange();
      }
    }, GAME_CLOCK_TICK_DURATION);

    return () => clearInterval(timer);
  }, [handleTimeChange]);


  useEffect(() => {
    if (timeLeft === 0) {
      handleGameOver();
    }
  }, [timeLeft, handleGameOver]);

  return (
      <>
        <Box flexDirection="row" height={18} borderStyle="double" borderColor="magentaBright" rowGap={8}>
          <Score score={score} />
          <Stomach percentageFull={0} />
          <Monster />
          <Time timeLeft={timeLeft} />
        </Box>
        <LinkBox />
      </>
  );
};