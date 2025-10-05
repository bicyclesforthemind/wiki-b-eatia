import React from "react";

import { Box, Text, Newline } from "ink";

export const LinkBox = () => {

  return (
    <Box flexDirection="column" flexGrow={"50%"} borderStyle="double" borderColor="greenBright">
      <Text>{"LINKS"}</Text>
      <Newline />
      <Text>{"LINKS"}</Text>
      <Newline />
      <Text>{"LINKS"}</Text>
      <Newline />
      <Text>{"LINKS"}</Text>
      <Newline />
      {/* TODO: data fetching */}
    </Box>
  );
};