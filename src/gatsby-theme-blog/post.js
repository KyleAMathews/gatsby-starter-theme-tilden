/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import React from "react";

import PostFooter from "gatsby-theme/blog/components/post-footer";
import Layout from "gatsby-theme-blog/components/layout";
import SEO from "gatsby-theme-blog/components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title }
    }
  },
  location,
  previous,
  next
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Styled.p
        sx={{
          fontFamily: `monospace`,
          fontSize: 1,
          background: `red`,
          mt: -3,
          mb: 3
        }}
      >
        {post.date}
      </Styled.p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
);

export default Post;
