import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./CustomerSupportStyle";
import CustomerSupport from "../../../components/services/customerSupport/index";
const CustomerSupportPage = React.memo((props) => {
  return (
    <>
      <CustomerSupport />
    </>
  );
});

export default withRouter(CustomerSupportPage);
