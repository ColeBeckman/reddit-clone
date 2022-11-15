import Post from "../post/post";


function PostFeed({ posts }) {

  return (
    <div>
      {posts?.map((post) => (
        <Post {...post}/>
      ))}
    </div>
  );
}

export default PostFeed;