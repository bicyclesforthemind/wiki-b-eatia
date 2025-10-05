import React, { useState } from "react";
import { Text, Box } from "ink";
import { Select } from "@inkjs/ui";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";

import { GAME_MODES } from "../consts.js";


export const TitleScreen = ({ handleModeSelected }) => {

  const [selectedMode, setSelectedMode] = useState(GAME_MODES[0]);

  return (
    <Box flexDirection="column" alignItems="center" justifyContent="space-between">
      <Gradient name="pastel">
        <BigText text="Wiki(b)eatia" font="pallet"  />
      </Gradient>
      <Box paddingTop={4}>
        <Text color="magentaBright" bold>{"Select a Game Mode: "}</Text>
      </Box>
      <Box paddingTop={12} flexDirection="row" alignItems="center" justifyContent="center" columnGap={16}>
       <Select 
          options={[
            {label: "Time Mode", value: "TIME_MODE"},
          ]} 
          onChange={(newValue) => {
            if (selectedMode === newValue) {
              handleModeSelected();
              return;
            }
            setSelectedMode(newValue);
          }}
        />
      </Box>
    </Box>
  )
}