import React, { useMemo } from "react";

import { Text } from "ink";

export const Link = ({ keyboardKey, title }) => {

  const linkBackgroundColor = useMemo(() => {
    switch (keyboardKey) {
      case "a":
        return "#BC13FE";
      case "s":
        return "#1F51FF";
      case "d":
        return "#FF5F1F";
      case "f":
        return "#AAF0D1";
      case "g":
        return "#F000FF";
      default: 
        return "#BC13FE";
    }
  }, [keyboardKey]);

  return (<Text color={"whiteBright"} backgroundColor={linkBackgroundColor}>{`${keyboardKey}: ${title}`}</Text>);
  
}