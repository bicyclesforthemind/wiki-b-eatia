import React, { useState, useEffect, useCallback } from "react";

import { Box, Newline, useInput } from "ink";

import { Link } from "./link.js";

import { fetchRandom } from "../utils.js";

import { WIKIPEDIA_ARTICLE_FETCH_LIMIT, KEY_SORT_ORDER } from "../consts.js";

export const LinkBox = ({ handleScoreChange }) => {

  const [fetchedData, setFetchedData] = useState();
  const [articles, setArticles] = useState();
  const [articlesToShow, setArticlesToShow] = useState([]);
  
  useEffect(() => {
    const f = async () => {
      const data = await fetchRandom(WIKIPEDIA_ARTICLE_FETCH_LIMIT);

     setFetchedData(data);
    };

    f();
  }, []);

  useEffect(() => {
    if (fetchedData) {
      const [first, second, third, fourth, fifth, ...rest] = fetchedData

      setArticles(rest);

      setArticlesToShow([
        {keyboardKey: "a", title: first.title},
        {keyboardKey: "s", title: second.title},
        {keyboardKey: "d", title: third.title},
        {keyboardKey: "f", title: fourth.title},
        {keyboardKey: "g", title: fifth.title},
     ]);
    }
  }, [fetchedData]);

  const sortByKeyboardKeys = (a, b) => KEY_SORT_ORDER.indexOf(a.keyboardKey) - KEY_SORT_ORDER.indexOf(b.keyboardKey);

  const handleKeyPress = useCallback((keyboardKey) => {
    const [first, ...rest] = articles;

    const includedArticles = articlesToShow.filter((article) => article.keyboardKey !== keyboardKey); 

    handleScoreChange(Math.floor(Math.random() * 7));

    const nextArticleToShow = {
      keyboardKey,
      title: first.title,
    };

    setArticles([...rest]);

    setArticlesToShow([
      nextArticleToShow,
      ...includedArticles,
    ].toSorted(sortByKeyboardKeys));

  }, [articles, articlesToShow]);

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
        {articlesToShow.map(({keyboardKey, title}) => (<Link key={`${keyboardKey}_${title}`} keyboardKey={keyboardKey} title={title}  />))}
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