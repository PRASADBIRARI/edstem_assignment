import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./BackgroundVerificationStyle";
import BackgroundVerification from "../../../components/services/backgroundVerification/index";
const BackgroundVerificationPage = React.memo((props) => {
  return (
    <>
      <BackgroundVerification/>
    </>
  );
});

export default withRouter(BackgroundVerificationPage);
