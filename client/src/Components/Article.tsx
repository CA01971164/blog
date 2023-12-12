//投稿した記事を表示させる仕組み
export const Article: React.FC<{ posts: Record<number, Post> }> = ({
  posts,
}) => {
  return (
    <>
      {Object.values(posts).map((post) => (
        <article key={post.id} className="blog-post">
          <header>
            <h2>{post.title}</h2>
          </header>
          <p>{post.content}</p>
        </article>
      ))}
    </>
  );
};
