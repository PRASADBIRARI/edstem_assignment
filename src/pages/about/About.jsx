import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./AboutStyle";
import About from "../../components/about/index";
const AboutPage = React.memo((props) => {
  return (
    <>
      <About />
    </>
  );
});

export default withRouter(AboutPage);
