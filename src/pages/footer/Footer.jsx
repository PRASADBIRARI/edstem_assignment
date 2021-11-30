import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./FooterStyle";
import Footer from '../../components/footer/index'
const FooterPage = React.memo((props) => {
  return (
    <>
      <Footer />
    </>
  );
});

export default withRouter(FooterPage);
