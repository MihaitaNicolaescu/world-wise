import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from './Home.module.css';

function Home () {
  return (
    <div className={styles.homepage}>
        <PageNav />
        <div className={styles.content}>
          <h1 className='text-red-500 text-5xl'>World Wise</h1>
          <h2>Track your journey. Discover your world.</h2>
          <h3>Welcome to World Wise Track your travels and see where your packages—and you—have been. Let’s start exploring the world together!</h3>
          <Link to="/app">Go to Appe</Link>
        </div>
    </div>
  )
}

export default Home;