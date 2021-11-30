import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./BlogStyle";
import Blog from '../../../components/blog/blog/index'
const BlogPage = React.memo((props) => {
  return (
    <>
      <Blog />
    </>
  );
});

export default withRouter(BlogPage);
