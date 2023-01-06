import styles from "./styles.module.css";
import SubReddit from "../subRedditPost/index";

function SubReddits({ subReddits }) {
  return (
    <div className={styles.subRedditsWrapper}>
      <header className={styles.header}>Popular SubReddits</header>
      <>
        {subReddits?.map((subReddit) => (
          <SubReddit key={subReddit.id} {...subReddit} />
        ))}
      </>
    </div>
  );
}

export default SubReddits;
