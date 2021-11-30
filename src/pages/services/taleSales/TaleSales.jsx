import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./TaleSalesStyle";
import TaleSales from "../../../components/services/taleSales/index";
const TaleSalesPage = React.memo((props) => {
  return (
    <>
      <TaleSales />
    </>
  );
});

export default withRouter(TaleSalesPage);
