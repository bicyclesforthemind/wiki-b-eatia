import React, { useState } from "react";

import { Box, Newline, useInput } from "ink";

import { Link } from "./link.js";

export const LinkBox = () => {

  // get links
  // display link
  

  const MOCK_LINKS = [
    { keyboardKey: "a", title: "TitleTitleTitleTitle" },
    { keyboardKey: "s", title: "TitleTitleTitleTitle" },
    { keyboardKey: "d", title: "TitleTitleTitleTitle" },
    { keyboardKey: "f", title: "TitleTitleTitleTitle" },
    { keyboardKey: "g", title: "TitleTitleTitleTitle" },
  ];


  const [articlesToShow, setArticlesToShow] = useState(MOCK_LINKS); 
  

  const handleKeyPress = useCallback((keyboardKey) => {
    //
    
  }, [articlesToShow]);

  useInput((input, _) => {
    switch (input) {
      case "a":
        handleKeyPress("a");
        return;
      case "s":
        handleKeyPress("s");
        return;
      case "d":
        handleKeyPress("d");
        return;
      case "f":
        handleKeyPress("f");
        return;
      case "g":
        handleKeyPress("g");
        return;
      default:
        return;
    }
  });


  return (
    <Box flexDirection="column" alignItems="center" flexGrow={"50%"} borderStyle="double" borderColor="greenBright">
      <Box flexDirection="row" flexGrow={1} paddingX={4} columnGap={4}>
        {MOCK_LINKS.map(({keyboardKey, title}) => (<Link key={`${keyboardKey}_${title}`} keyboardKey={keyboardKey} title={title}  />))}
      </Box>
      {/* Pad newlines */}
      <Newline />
      <Newline />
      <Newline />
      <Newline />
      <Newline />
      <Newline />
      <Newline />
    </Box>
  );
};