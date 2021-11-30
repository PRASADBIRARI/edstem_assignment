import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./SurveyCollectionStyle";
import SurveyCollection from "../../../components/services/surveyCollection/index";
const SurveyCollectionPage = React.memo((props) => {
  return (
    <>
      <SurveyCollection />
    </>
  );
});

export default withRouter(SurveyCollectionPage);
