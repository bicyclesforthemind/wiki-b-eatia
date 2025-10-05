import React from "react";
import { Box, Text, Newline } from "ink";
import BigText from "ink-big-text";

export const Time = ({ timeLeft }) => (
  <Box flexDirection="column" flexGrow={1} borderStyle="double" borderColor="redBright">
    <Box flexDirection="column" alignItems="center" justifyContent="center">
      <Text bold>{"TIME:"}</Text>
      <Newline />
      <BigText colors={["red"]} text={`${timeLeft}`} font="simple3d" />
    </Box>
  </Box>
);