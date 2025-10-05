import React, { useEffect } from "react";

import BigText from "ink-big-text";
import Gradient from "ink-gradient";
import { useStdout } from "ink";

import { ENTER_FULL_SCREEN_STR, GAME_OVER_DURATION } from "../consts.js";

export const GameOver = ({ handleResetGameOver }) => {

  const { stdout } = useStdout();


  useEffect(() => {
    stdout.write(ENTER_FULL_SCREEN_STR);

    const timer = setTimeout(() => {
      handleResetGameOver();
    }, GAME_OVER_DURATION);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Gradient name="retro">
      <BigText letterSpacing={5} backgroundColor="yellow" text="GAME OVER" font="huge" />
    </Gradient>
  );
};