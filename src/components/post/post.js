import styles from "./post.module.css";
import { Link } from "react-router-dom";
import timeToTimeAgo from "../utils/timeConverter";
import { useGetSubRedditsQuery } from "../../data/api/apiSlice";
import { useEffect, useState } from "react";

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
  subreddit
}) {

  const [subredditData, setSubredditData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`);
      const data = await response.json();
      setSubredditData(data.data);
    }
    fetchData();
  }, [subreddit]);

  let regex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi
  const isPhoto = url.match(regex);
  const video = media?.reddit_video?.fallback_url
  const commentCount = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(num_comments);
  const postImg = subredditData?.icon_img ? subredditData.icon_img : "/redditDefaultLogo.png";
  return (
    <Link className={styles.link} to={`/post/${id}`}>
      <div className={styles.postWrapper}>
        <div className={styles.postHeader}>
          <div>
            <img className={styles.iconImg} src={postImg} />
          </div>
          <div className={styles.subRedditName}>
            {subredditData?.display_name_prefixed}
          </div>
          <div className={styles.postedBy}>posted by: {author}</div>
          <div className={styles.timeStamp}>{timeToTimeAgo(created_utc)}</div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.postTitle}>{title}</div>
        </div>
        <div className={styles.imageContainer}>
          {!media?.scrubberThumbSource && isPhoto && (
            <img className={styles.postImage} src={url} />
          )}
        </div>
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
