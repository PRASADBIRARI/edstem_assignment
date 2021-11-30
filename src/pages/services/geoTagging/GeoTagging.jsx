import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./GeoTaggingStyle";
import GeoTagging from "../../../components/services/geoTagging//index";
const GeoTaggingPage = React.memo((props) => {
  return (
    <>
      <GeoTagging />
    </>
  );
});

export default withRouter(GeoTaggingPage);
