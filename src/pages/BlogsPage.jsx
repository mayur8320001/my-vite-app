import  { useState, useEffect } from "react";
import { Box, Grid, Card, CardContent, Typography, CardMedia, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import matter from "gray-matter";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const files = import.meta.glob("/public/blogs/**/*.md", { query: '?raw', import: 'default' });

      const items = await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
          const content = await resolver();
          const { data } = matter(String(content));
          return { ...data, path };
        })
      );

      setBlogs(items);
    };

    loadBlogs();
  }, []);

  return blogs;
};

const BlogPage = () => {
  const blogs = useBlogs();
  const navigate = useNavigate();

  return (<>
    <Box sx={{ padding: 3 }}>
    <Typography variant="h3" align="center" gutterBottom>
  <strong>Read Our Latest Blogs</strong>
</Typography>
      <Grid container spacing={3} justifyContent="center">
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
           whileHover={{ scale: 1.05 }}
              onClick={() => navigate(`/blogs/${index}`)} // ✅ Correct path
              style={{ cursor: "pointer" }}
            >
              <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                <CardMedia component="img" height="200" image={blog.coverImage} alt={blog.title} />
                <CardContent>
                  <Typography variant="h6">{blog.title}</Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
                    {blog.excerpt}
                  </Typography>
                  
                  {/* ✅ Company Logo, Name & Date */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src={blog.author.picture} alt={blog.author.name} sx={{ width: 30, height: 30 }} />
                    <Typography variant="body2" fontWeight="bold">{blog.author.name}</Typography>
                    <Typography variant="body2" color="textSecondary">• {blog.date}</Typography>
                  </Box>

                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default BlogPage;
