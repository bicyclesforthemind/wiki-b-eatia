import React from "react";
import { Box, Text, Newline } from "ink";
import BigText from "ink-big-text";


export const Score = ({ score }) => (
  <Box flexDirection="column" flexGrow={1} borderStyle="double" borderColor="redBright">
    <Box flexDirection="column" alignItems="center" justifyContent="center">
      <Text bold>{"SCORE:"}</Text>
      <Newline />
      <BigText colors={["green"]} text={`${score}`} font="simple3d" />
    </Box>
  </Box>
);