import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./AmazonCaseStudyStyle";
import AmazonCaseStudy from "../../../components/home/caseStudy/amazonCaseStudy/index";
const AmazonCaseStudyPage = React.memo((props) => {
  return (
    <>
      <AmazonCaseStudy />
    </>
  );
});

export default withRouter(AmazonCaseStudyPage);
