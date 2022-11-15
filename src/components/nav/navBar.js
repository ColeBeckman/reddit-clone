import styles from './navBar.module.css'

function NavBar () {
  return ( 
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src='https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png'/>
        <input className={styles.searchBar} placeholder='Search SubReddits Here'/>
      </header>
    </div>
   );
}

export default NavBar ;