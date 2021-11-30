import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./PickingPackingStyle";
import PickingPacking from "../../../components/services/pickingPacking";
const PickingPackingPage = React.memo((props) => {
  return (
    <>
      <PickingPacking />
    </>
  );
});

export default withRouter(PickingPackingPage);
