import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./WarehouseServiceStyle";
import WarehouseService from "../../../components/services/warehouseService/index";
const WarehouseServicePage = React.memo((props) => {
  return (
    <>
      <WarehouseService />
    </>
  );
});

export default withRouter(WarehouseServicePage);

