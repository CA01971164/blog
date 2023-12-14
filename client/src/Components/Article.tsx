import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//投稿した記事を表示させる仕組み
export const Article: React.FC<{ posts: Record<number, Post> }> = ({
  posts,
}) => {
  return (
    <>
      {Object.values(posts).map((post) => (
        <Card sx={{ minWidth: 275, m: 2 }} key={post.id} className="blog-post">
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">{post.content}</Typography>

            <CardActions>
              <Button size="small">Read More</Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
