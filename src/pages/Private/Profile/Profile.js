// Library imports
import React from "react";
import { useSelector } from "react-redux";
// Components
import Page from "../../../components/Layout/Page/Page";
import PageHeader from "../../../components/Layout/Page/PageHeader";
import SectionAppSettings from "./AppSettings/SectionAppSettings";
import SectionUserSettings from "./UserSettings/SectionUserSettings";
import SectionSteps from "./Steps/SectionSteps";
import SectionWeights from "./Weights/SectionWeights";
import BasicCard from "../../../components/Cards/BasicCard";

/**
 * Page for displaying the User Profile and managing settings
 *
 * Status: complete
 */
const Profile = () => {
  // Redux store user object
  const user = useSelector((state) => state.user);

  return (
    <Page navbar container>
      <PageHeader header={"Profile"} />
      <BasicCard>
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-normal">{user.name}</h1>
          <h2 className="text-accent">{user.email}</h2>
        </div>
      </BasicCard>
      <SectionWeights />
      <SectionSteps />
      <SectionAppSettings />
      <SectionUserSettings />
    </Page>
  );
};

export default Profile;
