import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./ContentModerationStyle";
import ContentModeration from "../../../components/services/contentModeration/index";
const ContentModerationPage = React.memo((props) => {
  return (
    <>
      <ContentModeration />
    </>
  );
});

export default withRouter(ContentModerationPage);

