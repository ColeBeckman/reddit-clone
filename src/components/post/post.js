import styles from "./post.module.css";
import { Link } from "react-router-dom";
import timeToTimeAgo from "../utils/timeConverter";

function Post({
  id,
  title,
  author,
  preview,
  thumbnail,
  num_comments,
  media,
  display_name,
  url,
  created_utc,
  icon_url,
}) {

  useEffect(() => {
    if (!isLoading) {
      fetchSubredditAbout(post.data.subreddit_name_prefixed).then(
        (response) => {
          setSubredditIcon(response.icon_img);
        }
      );
    }
    return () => setSubredditIcon("");
  }, [post.data.subreddit_name_prefixed, isLoading]);

  let regex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi
  const isPhoto = url.match(regex);
  const video = media?.reddit_video?.fallback_url
  const commentCount = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num_comments);
  const postImg = icon_url ? icon_url : "/redditDefaultLogo.png";
  return (
    <Link className={styles.link} to={`/post/${id}`}>
      <div className={styles.postWrapper}>
        <div className={styles.timeToGo}>
          <img className={styles.iconImg} src={postImg} />
          <h3>Posted by: {author}</h3>
          {timeToTimeAgo(created_utc)}
        </div>
        <div className={styles.textWrapper}>
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
        <div className={styles.commentWrapper}>{commentCount} Comments</div>
      </div>
    </Link>
  );
}

export default Post;
