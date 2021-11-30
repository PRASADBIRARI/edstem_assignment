import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./BlogDetailsStyle4";
import BlogDetails4 from '../../../components/blog/blogDetails4/index'
const BlogDetailsPage4 = React.memo((props) => {
  return (
    <>
      <BlogDetails4 />
    </>
  );
});

export default withRouter(BlogDetailsPage4);
