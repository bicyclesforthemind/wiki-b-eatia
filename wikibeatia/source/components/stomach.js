import React from "react";
import { Box, Text, Newline } from "ink";


export const Stomach = ({ percentageFull }) => (
  <Box flexDirection="column" flexGrow={1} borderStyle="double" borderColor="redBright">
    <Box flexDirection="column" alignItems="center" justifyContent="center">
      <Text bold>{"STOMACH:"}</Text>
      <Newline />
      <Newline />
        <Text>
          {"╔══════════╗"}
        </Text>
        <Text>
          {"║          ║"}
        </Text>
        <Text>
          {"║          ║"}
        </Text>
        <Text>
          {"║          ║"}
        </Text>
        <Text>
          {"║          ║"}
        </Text>
        <Text>
          {"║          ║"}
        </Text>
        <Text>
          {"║          ║"}
        </Text>
        <Text>
          {"╚══════════╝"}
        </Text>
    </Box>
  </Box>
);