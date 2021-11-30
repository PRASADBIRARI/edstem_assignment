import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./PrivacyPolicyStyle";
import PrivacyPolicy from "../../components/privacyPolicy/index";
const PrivacyPolicyPage = React.memo((props) => {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
});

export default withRouter(PrivacyPolicyPage);
