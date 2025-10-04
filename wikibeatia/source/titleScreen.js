import React, { useEffect, useState } from "react";
import { Text, Box } from "ink";
import { Select } from "@inkjs/ui";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";
import { useInput } from 'ink';
import { Player } from 'cli-sound';


const MODES = ["GREEN", "RED", "BLUE"];


export const TitleScreen = ({ handleModeSelected }) => {

  const [isModeSelected, setIsModeSelected] = useState(false);
  const [selectedMode, setSelectedMode] = useState(undefined);

  // useEffect(() => {
  //   const p = new Player({
  //     volume: 0.4,
  //   })
  //   p.play("");
  // }, []);

  useInput((input, key) => {
    if (key.return) {
      // select mode
    }
  });

  return (
    <Box flexDirection="column" alignItems="center" justifyContent="space-between">
      <Gradient name="pastel">
        <BigText text="Wiki(b)eatia" font="pallet"  />
      </Gradient>
      <Box paddingTop={4}>
        <Text color="magentaBright" dimColor={true} bold>{`Select a Mode: ${isModeSelected ? selectedMode : ""}`}</Text>
      </Box>
      <Box paddingTop={12} flexDirection="row" alignItems="center" justifyContent="center" columnGap={16}>
       <Select 
        options={[
          {label: "Red Mode", value: "RED"},
          {label: "Green Mode", value: "GREEN"},
          {label: "Blue Mode", value: "BLUE"},
        ]} 
        onChange={(newValue) => {
          if (selectedMode === newValue) {
            // return 
            setIsModeSelected(true);
            handleModeSelected();
            return;
          }
          setSelectedMode(newValue);
        }}
        defaultValue="RED"
         />
      </Box>
    </Box>
  )
}