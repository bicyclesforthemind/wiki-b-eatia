import React from "react";
import { Box, Text, Newline } from "ink";

export const Monster = () => (
  <Box flexDirection="column" flexGrow={1} borderStyle="double" borderColor="redBright">
    <Box flexDirection="column" alignItems="center" justifyContent="center">
      <Text bold>{"MONSTER:"}</Text>
      <Newline />
      {/* TODO */}
    </Box>
  </Box>
);