import React from "react";
import { Grid } from "@mui/material";

import Page from "../components/layouts/Page/Page";
import ProfileCard from "../components/profile/ProfileCard";

import TempCard from "../components/profile/TempCard";
import TempCard2 from "../components/profile/TempCard2";

const gridContainer = {
  display: "flex",
  justifyContent: "stretch",
  alignItems: "stretch",
};

const gridItem = {
  display: "flex",
};

const Profile = () => {
  return (
    <Page title="Profile">
      <Grid container sx={gridContainer}>
        <Grid item xs={12} sm={6} sx={gridItem}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} sm={6} sx={gridItem}>
          <TempCard />
        </Grid>
      </Grid>
      <Grid container sx={gridContainer}>
        <Grid container>
          <Grid item sm={6} sx={gridItem}>
            <TempCard />
          </Grid>
          <Grid item sm={6} sx={gridItem}>
            <TempCard />
          </Grid>
        </Grid>

        <Grid item sm={12} sx={gridItem}>
          <TempCard2 />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Profile;
