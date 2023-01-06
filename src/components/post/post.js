import styles from "./post.module.css";
import { Link } from "react-router-dom";
function Post({
  id,
  title,
  author,
  preview,
  thumbnail,
  numComments,
  media,
  display_name,
  url,
  ...props
}) {
  console.log(preview);
  let regex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi
  const isPhoto = url.match(regex);
  const video = media?.reddit_video?.fallback_url
  return (
    <div className={styles.postWrapper}>
      <Link to={`/post/${id}`}>
        <div className={styles.textWrapper}>
          <h3>{author}</h3>
          <h2>{title}</h2>
        </div>
        {!media?.scrubberThumbSource && isPhoto && (
          <img className={styles.postImage} src={url} />
        )}
        {video?.includes("https") && (
          <video className={styles.postVideo} controls>
            <source
              src={video}
            ></source>
          </video>
        )}
      </Link>
      <div className={styles.commentWrapper}>Comments: {numComments}</div>
    </div>
  );
}

export default Post;
