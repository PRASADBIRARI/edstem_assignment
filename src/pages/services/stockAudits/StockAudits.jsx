import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./StockAuditsStyle";
import StockAudits from "../../../components/services/stockAudits/index";
const StockAuditsPage = React.memo((props) => {
  return (
    <>
      <StockAudits />
    </>
  );
});

export default withRouter(StockAuditsPage);
