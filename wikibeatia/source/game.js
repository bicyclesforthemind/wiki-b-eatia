import React from "react";
import { useState } from "react";
import BigText from "ink-big-text";


export const Game = () => {
  const [score, setScore] = useState(0);

  return (
    <BigText align="center" maxLength={16} text="TODO GAME HERE" font="simpleBlock" />
  );
};