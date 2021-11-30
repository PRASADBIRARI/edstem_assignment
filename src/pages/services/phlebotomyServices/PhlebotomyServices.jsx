import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./PhlebotomyServicesStyle";
import PhlebotomyServices from "../../../components/services/phlebotomyServices/index";
const PhlebotomyServicesPage = React.memo((props) => {
  return (
    <>
      <PhlebotomyServices />
    </>
  );
});

export default withRouter(PhlebotomyServicesPage);
