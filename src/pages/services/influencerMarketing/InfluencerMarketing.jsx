import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./InfluencerMarketingStyle";
import InfluencerMarketing from "../../../components/services/influencerMarketing/index";
const InfluencerMarketingPage = React.memo((props) => {
  return (
    <>
      <InfluencerMarketing />
    </>
  );
});

export default withRouter(InfluencerMarketingPage);
