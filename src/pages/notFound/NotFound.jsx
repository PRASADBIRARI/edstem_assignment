import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import { localRoute } from "../../routes/localRoutes";
import { Link } from "react-router-dom";
import "./NotFoundStyle.jsx";

const NotFound = React.memo((props) => {
 
  return (
    <div style={{margin:"350px"}}>
       <center>
       <h1 style={{color:"#ccc"}}>Page Not Found</h1>
       <hr/>
     </center>
    </div>
  );
});

export default withRouter(NotFound);
