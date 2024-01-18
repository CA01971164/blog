import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Box } from "@mui/material";

interface BlogPost {
  title: string;
  fullText: string;
}

const BlogPost = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blogs/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1">{post.fullText}</Typography>
    </Box>
  );
};

export default BlogPost;
