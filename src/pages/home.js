import {
  useGetPopularPostsQuery,
  useGetSubRedditsQuery,
} from "../data/api/apiSlice";
import { useState } from "react";
import styles from "./home.module.css";
import SubReddits from "../components/subReddits/index";
import PostFeed from "../components/postFeed";

function HomePage() {
  const [type, setType] = useState("hot");
  const popularPosts = useGetPopularPostsQuery(type);
  const filteredPopularPost = popularPosts.data?.filter(
    (post) => !post.isSponsored
  );
  const subReddits = useGetSubRedditsQuery();
  const normalizeSubReddits = subReddits.data?.map((sub) => sub.data);
  normalizeSubReddits?.shift();

  return (
    <div className={styles.homeFeedWrapper}>
      <PostFeed
        posts={filteredPopularPost}
        isLoading={popularPosts.isFetching}
        setType={setType}
        type={type}
      />
      <SubReddits
        subReddits={normalizeSubReddits}
      />
    </div>
  );
}

export default HomePage;
