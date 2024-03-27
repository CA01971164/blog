import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography, Box } from "@mui/material";
import { Remarkable } from "remarkable";

// コンポーネントとそのpropsの型を区別するために、型やインターフェース名の前にIを付ける（または他の区別可能なプレフィックスやサフィックスを使用する）ことは、TypeScriptを使用したReactプロジェクトにおいて一般的な慣習の一つです。

interface IBlogPost {
  title: string;
  fullText: string;
}

const BlogPost = () => {
  const [post, setPost] = useState<IBlogPost | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setPost(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <Typography>Loading...</Typography>;
  }

  const md = new Remarkable();
  const markedContent = md.render(post.fullText);

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: markedContent }} />
    </Box>
  );
};

export default BlogPost;
