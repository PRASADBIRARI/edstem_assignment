import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./PhonepayCaseStudyStyle";
import PhonepayCaseStudy from "../../../components/home/caseStudy/phonepayCaseStudy/index";
const PhonepayCaseStudyPage = React.memo((props) => {
  return (
    <>
      <PhonepayCaseStudy />
    </>
  );
});

export default withRouter(PhonepayCaseStudyPage);
