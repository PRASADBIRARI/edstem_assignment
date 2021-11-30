import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./HeaderStyle";
import Header from '../../components/header/index'
const HeaderPage = React.memo((props) => {
  return (
    <>
      <Header />
    </>
  );
});

export default withRouter(HeaderPage);
