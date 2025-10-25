import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from './Home.module.css';

function Home () {
  return (
    <div className={styles.homepage}>
        <PageNav />
        <div className={styles.content}>
          <h2 className="text-[75px]">Track your journey</h2>
          <h2 className="text-[85px] font-bold mt-[-50px]">Discover your world</h2>
          <h3 className="w-2/3 mx-auto text-[35px] font-semibold text-center">Welcome to World Wise Track your travels and see where your packages and you have been. Let’s start exploring the world together!</h3>
          <Link className="w-fit mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="/app">START TRAKING NOW</Link>
        </div>
    </div>
  )
}

export default Home;