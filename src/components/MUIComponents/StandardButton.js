import React from "react";

import { Button, styled } from "@mui/material";

const StandardButton = styled(Button)({
  borderRadius: "0.5rem",
});

export default function BasicUsage(props) {
  return <StandardButton>{props.children}</StandardButton>;
}
