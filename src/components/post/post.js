import styles from './post.module.css'

function Post ({ id, title, author, thumbnail, viewCount, numComments }) {

  return ( 
    <div className={styles.postWrapper}>
      {author}
      <br/>
      {title}
    </div>
   );
}

export default Post;