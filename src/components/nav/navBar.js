import styles from './navBar.module.css'

function NavBar () {
  return ( 
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src='/reddit.png'/>
        <input className={styles.searchBar} placeholder='Search SubReddits Here'/>
      </header>
    </div>
   );
}

export default NavBar ;