import React from "react";
import { Box, Item, Grid } from "@mui/material";

import Page from "../components/layouts/Page/Page";
import ProfileCard from "../components/profile/ProfileCard";
import StandardCard from "../components/cards/StandardCard";

const Profile = () => {
  return (
    <Page title="Profile">
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}
      >
        <Grid item sx={{ flex: "1" }}>
          <ProfileCard />
        </Grid>
        <Grid item sx={{ flex: "1" }}>
          <StandardCard
            sx={{
              flex: "1",
            }}
          ></StandardCard>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Profile;
