import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./ZomatoCaseStudyStyle";
import ZomatoCaseStudy from "../../../components/home/caseStudy/zomatoCaseStudy/index";
const ZomatoCaseStudyPage = React.memo((props) => {
  return (
    <>
      <ZomatoCaseStudy />
    </>
  );
});

export default withRouter(ZomatoCaseStudyPage);
