import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import FindJobMain from "../../components/findJobs/findJobMain/index";

const FindJobsPage = React.memo((props) => {
  return (
    <>
      <FindJobMain/>
    </>
  );
});

export default withRouter(FindJobsPage);
