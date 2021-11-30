import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./RapidoCaseStudyStyle";
import RapidoCaseStudy from "../../../components/home/caseStudy/rapidoCaseStudy/index";
const RapidoCaseStudyPage = React.memo((props) => {
  return (
    <>
      <RapidoCaseStudy />
    </>
  );
});

export default withRouter(RapidoCaseStudyPage);
