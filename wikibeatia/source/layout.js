import React from 'react';
import {Box, Text, Spacer} from 'ink';


export const Layout = () => {
  return (
    <Box borderStyle="double">
      <Text>Left</Text>
		  <Spacer />
		  <Text>Right</Text>
		  <Spacer />
    </Box>
  );
};