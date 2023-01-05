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
}) {
  return (
    <div className={styles.postWrapper}>
      <Link to={`/post/${id}`}>
        <div className={styles.textWrapper}>
          <h3>{author}</h3>
          <h2>{title}</h2>
        </div>
        {!media?.scrubberThumbSource && preview?.url.includes("https") && (
          <img className={styles.postImage} src={preview.url} />
        )}
        {!preview?.url && thumbnail?.url.includes("https") && (
          <img className={styles.postThumbnail} src={thumbnail.url} />
        )}
        {media?.scrubberThumbSource?.includes("https") && (
          <video className={styles.postVideo} controls>
            <source
              src={media.scrubberThumbSource.replace("_96", "_480")}
            ></source>
            <source
              src={media.scrubberThumbSource.replace("_96", "_360")}
            ></source>
          </video>
        )}
      </Link>
      <div className={styles.commentWrapper}>Comments: {numComments}</div>
    </div>
  );
}

export default Post;
