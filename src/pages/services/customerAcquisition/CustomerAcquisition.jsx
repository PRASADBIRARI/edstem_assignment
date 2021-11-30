import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./CustomerAcquisitionStyle";
import CustomerAcquisition from "../../../components/services/customerAcquisition/index";
const CustomerAcquisitionPage = React.memo((props) => {
  return (
    <>
      <CustomerAcquisition/>
    </>
  );
});

export default withRouter(CustomerAcquisitionPage);
