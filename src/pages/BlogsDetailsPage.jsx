import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import matter from "gray-matter";

const useBlogDetails = (id) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      const files = import.meta.glob("/public/blogs/**/*.md", { query: '?raw', import: 'default' });

      const entries = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const content = await resolver();
          const { data, content: mdContent } = matter(String(content));
          return { ...data, content: mdContent };
        })
      );

      setBlog(entries[id]);  // ✅ Match blog by index
    };

    loadBlog();
  }, [id]);

  return blog;
};

const BlogDetailsPage = () => {
  const { id } = useParams(); // ✅ Get blog ID from URL
  const blog = useBlogDetails(id);

  if (!blog) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 3 }}>
        <Typography variant="h3" gutterBottom>{blog.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{blog.date} - {blog.author.name}</Typography>
        <img src={blog.coverImage} alt={blog.title} style={{ width: "100%", borderRadius: 10, margin: "20px 0" }} />
        <Typography variant="body1">{blog.content}</Typography>
      </Box>
    </Container>
  );
};

export default BlogDetailsPage;
