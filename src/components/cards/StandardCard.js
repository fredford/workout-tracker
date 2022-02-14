import React from "react";

import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const StandardCard = styled(Card)({
  borderRadius: "0.75rem",
  marginRight: "1rem",
});

export default function BasicUsage(props) {
  return (
    <StandardCard>
      <CardContent sx={{ padding: "1rem !important" }}>
        {props.children}
      </CardContent>
    </StandardCard>
  );
}
