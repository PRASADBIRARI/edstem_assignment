import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./BlogDetailsStyle3";
import BlogDetails3 from '../../../components/blog/blogDetails3/index'
const BlogDetailsPage3 = React.memo((props) => {
  return (
    <>
      <BlogDetails3 />
    </>
  );
});

export default withRouter(BlogDetailsPage3);
