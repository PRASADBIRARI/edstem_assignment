import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./LastMileDeliverysStyle";
import LastMileDelivery from "../../../components/services/lastMileDelivery/index";
const LastMileDeliveryPage = React.memo((props) => {
  return (
    <>
      <LastMileDelivery />
    </>
  );
});

export default withRouter(LastMileDeliveryPage);
