import React, { useMemo } from "react";
import { Box, Text, Newline } from "ink";

import { STOMACH_EMPTY_STRING, STOMACH_FILL_STRING, STOMACH_GRID_ROWS, STOMACH_GRID_COLUMNS } from "../consts.js";

const StomachGrid = ({ fillMeter }) => {

  const stomachGrid = useMemo(() => {
    const stomachGrid = [];
    let slotsFilled = 0;

    for (let i = 0; i < STOMACH_GRID_ROWS; i++) {
      let stomachString = "";
      stomachString += "║";
      
      for (let j = 0; j < STOMACH_GRID_COLUMNS; j++) {
        if (slotsFilled >= fillMeter) {
          stomachString += STOMACH_EMPTY_STRING;
        } else {
          stomachString += STOMACH_FILL_STRING;
          slotsFilled++;
        }
      }
      stomachString += "║"
      stomachGrid.push(stomachString.split('').toReversed().join(''));
    }

    return stomachGrid.toReversed();
  }, [fillMeter]);

  return (
    <>
      <Text>
        {"╔══════════╗"}
      </Text>
      {stomachGrid.map((stomachGridRow, index) => (<Text key={`stomachGridRow_${index}`}>{stomachGridRow}</Text>))}
      <Text>
        {"╚══════════╝"}
      </Text>
    </>
  )

};

export const Stomach = ({ fillMeter }) => (
  <Box flexDirection="column" flexGrow={1} borderStyle="double" borderColor="redBright">
    <Box flexDirection="column" alignItems="center" justifyContent="center">
      <Text bold>{"STOMACH:"}</Text>
      <Newline />
      <StomachGrid fillMeter={fillMeter} />
    </Box>
  </Box>
);