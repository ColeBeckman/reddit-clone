import Post from "../post/post";
import LoadingSpinner from "../loadingSpinner";
import styles from "./styles.module.css";

function PostFeed({ posts, isLoading, setType, type }) {
  return (
      <div className={styles.postFeedWrapper}>
        <div className={styles.buttonWrapper}>
          <button
            onClick={() => setType("hot")}
            className={type === "hot" ? styles.active : ""}
          >
            Hot
          </button>
          <button
            onClick={() => setType("new")}
            className={type === "new" ? styles.active : ""}
          >
            New
          </button>
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {posts?.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </>
        )}
      </div>
  );
}

export default PostFeed;
