import styles from "./styles.module.css";

function SubReddit({ display_name, icon_img, subscribers, }) {
  const subRedditImg = icon_img ? icon_img : "/redditDefaultLogo.png";
  const subCount = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(subscribers);
  return (
    <div>
      <div className={styles.subRedditWrapper}>
        <img className={styles.iconImg} src={subRedditImg} />
        <div className={styles.textWrapper}>
          <h4>{display_name}</h4>
          <h5>{subCount} Subscribers</h5>
        </div>
      </div>
    </div>
  );
}

export default SubReddit;
