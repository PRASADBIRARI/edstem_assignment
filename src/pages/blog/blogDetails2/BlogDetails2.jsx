import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./BlogDetailsStyle2";
import BlogDetails2 from '../../../components/blog/blogDetails2/index'
const BlogDetailsPage2 = React.memo((props) => {
  return (
    <>
      <BlogDetails2 />
    </>
  );
});

export default withRouter(BlogDetailsPage2);
