import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./ServicesStyle";
import Services from '../../components/services/services/index'
const ServicesPage = React.memo((props) => {
  return (
    <>
      <Services />
    </>
  );
});

export default withRouter(ServicesPage);
