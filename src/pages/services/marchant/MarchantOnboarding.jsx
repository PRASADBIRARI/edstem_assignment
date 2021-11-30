import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./MarchantOnboardingStyle";
import MarchantOnboarding from "../../../components/services/merchant/index";
const MarchantOnboardingPage = React.memo((props) => {
  return (
    <>
      <MarchantOnboarding />
    </>
  );
});

export default withRouter(MarchantOnboardingPage);
