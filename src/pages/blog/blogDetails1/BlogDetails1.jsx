import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./BlogDetailsStyle1";
import BlogDetails1 from '../../../components/blog/blogDetails1/index'
const BlogDetailsPage1 = React.memo((props) => {
  return (
    <>
      <BlogDetails1 />
    </>
  );
});

export default withRouter(BlogDetailsPage1);
