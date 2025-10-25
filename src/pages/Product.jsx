import PageNav from "../components/PageNav";
import styles from './Product.module.css';
import { Link } from 'react-router-dom';

function Product () {
  return (
    <div className={styles.product}>
      <PageNav />

      <main className={styles.hero}>
        <div className={styles.media}>
          <img src="/bg.jpg" alt="Product illustrative" className={styles.image} />
        </div>

        <div className={styles.content}>
          <h1 className="font-bold">World Wise Product</h1>
          <div className="w-full">
            <p className={`${styles.lead} w-full font-semibold text-center`}>Track journeys and discover insights with our lightweight tracking dashboard designed for travelers.</p>
          </div>

          <ul className={styles.points}>
            <li className="w-2/3 mx-auto text-left font-semibold">Real-time journey tracking</li>
            <li className="w-2/3 mx-auto text-left font-semibold">Intuitive visualization and maps</li>
            <li className="w-2/3 mx-auto text-left font-semibold">Exportable reports and analytics</li>
            <li className="w-2/3 mx-auto text-left font-semibold">Integrations with shipping providers</li>
          </ul>

          <div className={`${styles.actions} mx-auto`}>
            <Link to="/pricing" className={styles.primary}>View Pricing</Link>
            <Link to="/contact" className={`${styles.secondary} ml-2 hover:bg-[#007bff] hover:text-white text-[#007bff]`}>Contact Us</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Product;