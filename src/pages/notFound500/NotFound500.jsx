import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { localRoute } from "../../routes/localRoutes";
import { Link } from "react-router-dom";
import "./NotFound500Style.jsx";

const NotFound = React.memo((props) => {
  useEffect(() => {
    document.title = `Greatvet`
  }, [])
  return (
    <div style={{ margin: "350px" }}>
      <center>
        <h1 style={{ color: "#ccc" }}> 500 Error page</h1>
        <hr />
      </center>
    </div>
  );
});

export default withRouter(NotFound);
