import styles from "./postPage.module.css";
import { useGetPostQuery } from "../data/api/apiSlice";
import { useParams } from 'react-router-dom';
import Post from "../components/post/post";

function PostPage() {
  return ( 
    <div className={styles.postPageWrapper}>
    </div>
  );
}

export default PostPage ;