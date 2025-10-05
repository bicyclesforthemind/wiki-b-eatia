import React from "react";

import { Text } from "ink";

export const Link = ({ keyboardKey, title }) => (
  <Text>{`${keyboardKey}: ${title}`}</Text>
)